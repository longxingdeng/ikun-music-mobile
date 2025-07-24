import { existsFile } from './fs'
import { formatPlayTime2 } from '@/utils'
import type { MusicMetadataFull } from './localMediaMetadata'

export const getLocalFilePath = async(musicInfo: LX.Music.MusicInfoLocal): Promise<string> => {
  if (await existsFile(musicInfo.meta.filePath)) return musicInfo.meta.filePath
  // 直接从应用外 intent 调用打开的文件，ogg等类型无法判断文件是否存在，但这类文件路径为纯数字
  return /\/\d+$/.test(musicInfo.meta.filePath) ? musicInfo.meta.filePath : ''
}

export const buildLocalMusicInfo = (
  filePath: string,
  metadata: MusicMetadataFull,
  setting: LX.AppSetting['setting'],
): LX.Music.MusicInfoLocal => {
  const info: LX.Music.MusicInfoLocal = {
    id: filePath,
    name: metadata.name,
    singer: metadata.singer,
    source: 'local',
    interval: formatPlayTime2(metadata.interval),
    meta: {
      albumName: metadata.albumName,
      filePath,
      songId: filePath,
      picUrl: metadata.picture,
      ext: metadata.ext,
    },
  }
  if (setting.other.isScanMusicIsMusic) {
    const singer = info.singer
    const name = info.name
    if (singer && name) {
      const singerName = singer.split('、')
      if (singerName.length > 1 && singerName.some(s => name.includes(s))) {
        info.name = name.replace(new RegExp(singerName.join('|'), 'g'), '').trim()
      }
    }
  }
  return info
}
