import { removeListMusics, updateListMusicPosition, updateListMusics } from '@/core/list'
import { playList, playNext } from '@/core/player/player'
import { addTempPlayList } from '@/core/player/tempPlayList'
import settingState from '@/store/setting/state'
import { similar, sortInsert, toOldMusicInfo } from '@/utils'
import { confirmDialog, openUrl, shareMusic, toast } from '@/utils/tools'
import { addDislikeInfo, hasDislike } from '@/core/dislikeList'
import playerState from '@/store/player/state'
import type { SelectInfo } from './ListMenu'
import { type Metadata } from '@/components/MetadataEditModal'
import musicSdk from '@/utils/musicSdk'
import { getListMusicSync } from '@/utils/listManage'
import { requestStoragePermission } from '@/utils/tools'
import { getMusicUrl } from '@/core/music/online'
import { getLyricInfo } from '@/core/music'
import { writeFile, mkdir } from '@/utils/fs'
import RNFetchBlob from 'rn-fetch-blob'

export const handlePlay = (listId: SelectInfo['listId'], index: SelectInfo['index']) => {
  void playList(listId, index)
}
export const handlePlayLater = (
  listId: SelectInfo['listId'],
  musicInfo: SelectInfo['musicInfo'],
  selectedList: SelectInfo['selectedList'],
  onCancelSelect: () => void
) => {
  if (selectedList.length) {
    addTempPlayList(selectedList.map((s) => ({ listId, musicInfo: s })))
    onCancelSelect()
  } else {
    addTempPlayList([{ listId, musicInfo }])
  }
}

export const handleRemove = (
  listId: SelectInfo['listId'],
  musicInfo: SelectInfo['musicInfo'],
  selectedList: SelectInfo['selectedList'],
  onCancelSelect: () => void
) => {
  if (selectedList.length) {
    void confirmDialog({
      message: global.i18n.t('list_remove_music_multi_tip', { num: selectedList.length }),
      confirmButtonText: global.i18n.t('list_remove_tip_button'),
    }).then((isRemove) => {
      if (!isRemove) return
      void removeListMusics(
        listId,
        selectedList.map((s) => s.id)
      )
      onCancelSelect()
    })
  } else {
    void removeListMusics(listId, [musicInfo.id])
  }
}

export const handleUpdateMusicPosition = (
  position: number,
  listId: SelectInfo['listId'],
  musicInfo: SelectInfo['musicInfo'],
  selectedList: SelectInfo['selectedList'],
  onCancelSelect: () => void
) => {
  if (selectedList.length) {
    void updateListMusicPosition(
      listId,
      position,
      selectedList.map((s) => s.id)
    )
    onCancelSelect()
  } else {
    void updateListMusicPosition(listId, position, [musicInfo.id])
  }
}

export const handleUpdateMusicInfo = (
  listId: SelectInfo['listId'],
  musicInfo: LX.Music.MusicInfoLocal,
  newInfo: Metadata
) => {
  void updateListMusics([
    {
      id: listId,
      musicInfo: {
        ...musicInfo,
        name: newInfo.name,
        singer: newInfo.singer,
        meta: {
          ...musicInfo.meta,
          albumName: newInfo.albumName,
        },
      },
    },
  ])
}

export const handleShare = (musicInfo: SelectInfo['musicInfo']) => {
  shareMusic(
    settingState.setting['common.shareType'],
    settingState.setting['download.fileName'],
    musicInfo
  )
}

export const searchListMusic = (list: LX.Music.MusicInfo[], text: string) => {
  let result: LX.Music.MusicInfo[] = []
  let rxp = new RegExp(
    text
      .split('')
      .map((s) => s.replace(/[.*+?^${}()|[\]\\]/, '\\$&'))
      .join('.*') + '.*',
    'i'
  )
  for (const mInfo of list) {
    const str = `${mInfo.name}${mInfo.singer}${mInfo.meta.albumName ? mInfo.meta.albumName : ''}`
    if (rxp.test(str)) result.push(mInfo)
  }

  const sortedList: Array<{ num: number; data: LX.Music.MusicInfo }> = []

  for (const mInfo of result) {
    sortInsert(sortedList, {
      num: similar(
        text,
        `${mInfo.name}${mInfo.singer}${mInfo.meta.albumName ? mInfo.meta.albumName : ''}`
      ),
      data: mInfo,
    })
  }
  return sortedList.map((item) => item.data).reverse()
}

export const handleShowMusicSourceDetail = async (minfo: SelectInfo['musicInfo']) => {
  const url = musicSdk[minfo.source as LX.OnlineSource]?.getMusicDetailPageUrl(
    toOldMusicInfo(minfo)
  )
  if (!url) return
  void openUrl(url)
}

export const handleDislikeMusic = async (musicInfo: SelectInfo['musicInfo']) => {
  const confirm = await confirmDialog({
    message: musicInfo.singer
      ? global.i18n.t('lists_dislike_music_singer_tip', {
          name: musicInfo.name,
          singer: musicInfo.singer,
        })
      : global.i18n.t('lists_dislike_music_tip', { name: musicInfo.name }),
    cancelButtonText: global.i18n.t('cancel_button_text_2'),
    confirmButtonText: global.i18n.t('confirm_button_text'),
    bgClose: false,
  })
  if (!confirm) return
  await addDislikeInfo([{ name: musicInfo.name, singer: musicInfo.singer }])
  toast(global.i18n.t('lists_dislike_music_add_tip'))
  if (hasDislike(playerState.playMusicInfo.musicInfo)) {
    void playNext(true)
  }
}

export const handleToggleSource = (
  listId: string,
  musicInfo: LX.Music.MusicInfo,
  toggleMusicInfo?: LX.Music.MusicInfoOnline | null
) => {
  const list = getListMusicSync(listId)
  const idx = list.findIndex((m) => m.id == musicInfo.id)
  if (idx < 0) return null
  musicInfo.meta.toggleMusicInfo = toggleMusicInfo
  const newInfo = {
    ...musicInfo,
    meta: {
      ...musicInfo.meta,
      toggleMusicInfo,
    },
  }
  void updateListMusics([
    {
      id: listId,
      musicInfo: newInfo as LX.Music.MusicInfo,
    },
  ])
  if (
    !!toggleMusicInfo ||
    (playerState.playMusicInfo.listId == listId &&
      playerState.playMusicInfo.musicInfo?.id == musicInfo.id)
  ) {
    void playList(listId, idx)
  }
  return newInfo as LX.Music.MusicInfo
}

export function getFileExtension(url: string) {
  const match = url.match(/\.([0-9a-z]+)(?=[?#]|$)/i)
  return match ? match[1] : 'mp3'
}

/**
 * 保存歌词文件
 */
export const saveLyricFile = async (
  musicInfo: any,
  downloadDir: string,
  fileName: string
): Promise<void> => {
  try {
    // 确保下载目录存在
    await mkdir(downloadDir).catch(() => {
      // 目录可能已存在，忽略错误
    })

    const lyricInfo = await getLyricInfo({
      musicInfo,
      isRefresh: false,
    })

    if (lyricInfo && lyricInfo.lyric && lyricInfo.lyric.trim()) {
      const lyricPath = `${downloadDir}/${fileName}.lrc`
      await writeFile(lyricPath, lyricInfo.lyric, 'utf8')
      console.log('歌词文件保存成功:', lyricPath)
    } else {
      console.log('未找到歌词或歌词为空，跳过歌词文件保存')
    }
  } catch (error) {
    console.warn('保存歌词文件失败:', error)
    // 不抛出错误，避免影响音频下载
  }
}

export const handleDownload = async (musicInfo: any, quality: LX.Quality) => {
  try {
    await requestStoragePermission()
    try {
      getMusicUrl({
        musicInfo,
        quality,
        isRefresh: true,
        allowToggleSource: true,
      })
        .then(async (url) => {
          const extension = getFileExtension(url)
          const fileName = `${musicInfo.name} - ${musicInfo.singer} - ${quality}`
          const downloadDir = RNFetchBlob.fs.dirs.MusicDir + '/IKUN Music'
          const path = `${downloadDir}/${fileName}.${extension}`

          // 如果设置中启用了自动下载歌词，则同时下载歌词文件
          if (settingState.setting['download.autoDownloadLyric']) {
            void saveLyricFile(musicInfo, downloadDir, `${musicInfo.name} - ${musicInfo.singer}`)
          }

          RNFetchBlob.config({
            fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true,
              path: path,
              title: `${musicInfo.name} - ${musicInfo.singer}`,
              description: '正在下载文件...',
            },
          })
            .fetch('GET', url)
            .then((res) => {
              const successMsg = settingState.setting['download.autoDownloadLyric']
                ? `${fileName} 下载成功! 歌词文件已同时保存。请使用音乐标签写入Metadata`
                : `${fileName} 下载成功! 请使用音乐标签写入Metadata`
              toast(successMsg, 'long')
            })
            .catch((error) => {
              toast(`文件下载失败：${error}`)
            })
        })
        .catch((e) => {
          toast(`获取播放链接失败：${e}`)
        })
    } catch (e_1) {
      toast(`文件下载失败：${e_1}`)
    }
  } catch (e_2) {
    return await Promise.reject(e_2 ?? '权限获取失败')
  }
}
