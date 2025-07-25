import { View } from 'react-native'
import { useState, useRef, useImperativeHandle, forwardRef, useMemo } from 'react'
import ConfirmAlert, { type ConfirmAlertType } from '@/components/common/ConfirmAlert'
import Text from '@/components/common/Text'
import { createStyle } from '@/utils/tools'
import CheckBox from '@/components/common/CheckBox'
import { handleDownload } from './listAction'
import { useSetting } from '@/store/setting/hook'
import settingActions from '@/store/setting/action'

interface TitleType {
  updateTitle: (musicInfo: LX.Music.MusicInfo) => void
}
const Title = forwardRef<TitleType, {}>((props, ref) => {
  const [title, setTitle] = useState('')
  useImperativeHandle(ref, () => ({
    updateTitle(musicInfo) {
      setTitle(
        global.i18n.t('download_music_title', { name: musicInfo.name, artist: musicInfo.singer })
      )
    },
  }))

  return <Text style={{ marginBottom: 5 }}>{title}</Text>
})

interface PositionInputType {
  getText: () => string
  setText: (text: string) => void
  focus: () => void
}

export interface SelectInfo {
  musicInfo: LX.Music.MusicInfo
  selectedList: LX.Music.MusicInfo[]
  index: number
  listId: string
  single: boolean
}
const initSelectInfo = {}

interface MusicDownloadModalProps {
  onDownloadInfo: (info: LX.Music.MusicInfo) => void
}

export interface MusicDownloadModalType {
  show: (info: LX.Music.MusicInfo) => void
}

export default forwardRef<MusicDownloadModalType, MusicDownloadModalProps>(
  ({ onDownloadInfo }, ref) => {
    const alertRef = useRef<ConfirmAlertType>(null)
    const titleRef = useRef<TitleType>(null)
    const inputRef = useRef<PositionInputType>(null)
    const selectedInfo = useRef<LX.Music.MusicInfo>(initSelectInfo as LX.Music.MusicInfo)
    const [selectedQuality, setSelectedQuality] = useState<LX.Quality>('128k')
    const [playQualityList, setPlayQualityList] = useState<MusicOption[]>([])
    const [visible, setVisible] = useState(false)
    const setting = useSetting()
    const [downloadLyric, setDownloadLyric] = useState(setting['download.autoDownloadLyric'])

    interface QualityMap {
      [key: string]: MusicOption
    }

    const calcQualitys = () => {
      console.log('calcQualitys')
      console.log('calcQualitys' + selectedInfo.current.name)
      setPlayQualityList([])

      const map = new Map()

      map.set('128k', '128K 标准音质')
      map.set('320k', '320K 高品音质')
      map.set('flac', 'FLAC 无损音质')
      map.set('hires', 'HR 无损音质')
      map.set('atmos', '臻品全景声')
      map.set('atmos_plus', '臻品全景声2.0')
      map.set('master', '臻品母带')

      const qualitys = selectedInfo.current.meta.qualitys

      let qualityMap: QualityMap = {}
      for (let index = 0; index < qualitys.length; index++) {
        const element = qualitys[index]
        const temp: MusicOption = {
          id: element.type,
          name: map.has(element.type) ? map.get(element.type) : '未知',
          size: element.size,
          key: element.type,
        }
        qualityMap[element.type] = temp
      }
      setPlayQualityList(Object.values(qualityMap))
    }

    const handleShow = () => {
      console.log('handleShow')

      alertRef.current?.setVisible(true)
      requestAnimationFrame(() => {
        titleRef.current?.updateTitle(selectedInfo.current)
        setTimeout(() => {
          inputRef.current?.focus()
        }, 300)
      })
    }
    useImperativeHandle(ref, () => ({
      show(info) {
        selectedInfo.current = info
        calcQualitys()
        // 重置歌词下载选项为当前设置值
        setDownloadLyric(setting['download.autoDownloadLyric'])
        if (visible) {
          handleShow()
        } else {
          setVisible(true)
          requestAnimationFrame(() => {
            handleShow()
          })
        }
      },
    }))

    const handleDownloadMusic = () => {
      setSelectedQuality('128k')
      alertRef.current?.setVisible(false)

      // 临时更新设置以反映用户的选择
      const originalSetting = setting['download.autoDownloadLyric']
      if (originalSetting !== downloadLyric) {
        settingActions.updateSetting({ 'download.autoDownloadLyric': downloadLyric })
      }

      handleDownload(selectedInfo.current, selectedQuality).finally(() => {
        // 如果用户的选择与原设置不同，下载完成后恢复原设置
        if (originalSetting !== downloadLyric) {
          settingActions.updateSetting({ 'download.autoDownloadLyric': originalSetting })
        }
      })
    }

    interface MusicOption {
      id: LX.Quality
      name: string
      size?: string | null
      key?: string
    }

    const useActive = (id: LX.Quality) => {
      const isActive = useMemo(() => selectedQuality == id, [selectedQuality, id])
      return isActive
    }

    const Item = ({ id, name }: { id: LX.Quality; name: string }) => {
      const isActive = useActive(id)
      return (
        <CheckBox
          marginRight={8}
          check={isActive}
          label={name}
          onChange={() => {
            setSelectedQuality(id)
          }}
          need
        />
      )
    }

    return visible ? (
      <ConfirmAlert
        ref={alertRef}
        onConfirm={handleDownloadMusic}
        onHide={() => inputRef.current?.setText('')}
      >
        <View style={styles.content}>
          <Title ref={titleRef} />
          <View style={styles.list}>
            {playQualityList.map((item) => (
              <Item name={item.name + '' + '(' + item.size + ')'} id={item.id} key={item.key} />
            ))}
          </View>
          <View style={styles.lyricOption}>
            <CheckBox
              check={downloadLyric}
              label="同时下载歌词文件"
              onChange={(checked) => setDownloadLyric(checked)}
            />
          </View>
        </View>
      </ConfirmAlert>
    ) : null
  }
)

const styles = createStyle({
  content: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 260,
    borderRadius: 4,
  },
  list: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  lyricOption: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
})
