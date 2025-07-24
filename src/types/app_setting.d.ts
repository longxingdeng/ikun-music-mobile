import type { NAV_SHEAR_TYPES, PLAYER_QUALITY_LEVELS, PLAYER_QUALITY_LEVELS_RAW } from '@/config/constant'
import type { UserApi } from './user_api'

declare global {
  namespace LX {
    interface SearchSetting {
      searchHistory: boolean
      hotSearch: boolean
    }

    interface PlayerSetting {
      mediaDeviceName: string
      mediaDeviceId: string
      isHandleAudioFocus: boolean
      isS2t: boolean
      isShowLyricTranslation: boolean
      isShowLyricRoma: boolean
      isSavePlayTime: boolean
      isAutoCleanPlayedList: boolean
      playbackRate: number
      cacheSize: string
      isPlayHighQuality: boolean
      isUseAudioOffload: boolean
      isShowNotificationImage: boolean
      isShowBluetoothLyric: boolean
      quality: PLAYER_QUALITY_LEVELS
    }

    interface PlayerRawSetting {
      mediaDeviceName: string
      mediaDeviceId: string
      isHandleAudioFocus: boolean
      isS2t: boolean
      isShowLyricTranslation: boolean
      isShowLyricRoma: boolean
      isSavePlayTime: boolean
      isAutoCleanPlayedList: boolean
      playbackRate: number
      cacheSize: string
      isPlayHighQuality: boolean
      isUseAudioOffload: boolean
      isShowNotificationImage: boolean
      isShowBluetoothLyric: boolean
      quality: PLAYER_QUALITY_LEVELS_RAW
    }

    interface ListSetting {
      isClickPlayList: boolean
      isShowSource: boolean
      isShowInterval: boolean
      addMusicLocationType: 'top' | 'bottom'
      isShowAlbumName: boolean
      'local.isScanMusic': boolean
      'local.dirPath': string
    }

    interface SyncSetting {
      enable: boolean
      port: string
      address: string[]
      serverName: string
      latestAddress: string | null
    }

    interface HotSearch {
      list: LX.HotSearch.HotSearchInfo[]
      source: LX.OnlineSource
      time: number
    }

    interface ComponentSetting {
      drawerLayoutPosition: 'left' | 'right'
      isShowAnimation: boolean
      randomAnimate: boolean
      isShowBackBtn: boolean
      isShowExitBtn: boolean
      isFocusSearchBox: boolean
      isAutoHiddenPlayBar: boolean
      isSohwPlayBarProgress: boolean
      isAlwaysKeepStatusBar: boolean
    }

    interface ThemeSetting {
      id: string
      isDark: boolean
      lightId: string
      darkId: string

      fontAliasing: boolean
      fontLighter: boolean
      dynamicBg: boolean
      hideBgDark: boolean
      autoDarkMode: boolean
    }

    interface OtherSetting {
      isAutoClearCache: boolean
      isAgreePact: boolean
      pactVersion: string
      isFirstRunning: boolean
      startupAutoPlay: boolean
      startupPushPlayDetailScreen: boolean
      sourceNameType: 'alias' | 'real'
      shareType: NAV_SHEAR_TYPES
      isEnableSyncLog: boolean
      isEnableUserApiLog: boolean
      isUseSystemFileSelector: boolean
      isScanMusicIsMusic: boolean
    }

    interface CommonSetting {
      'common.isAutoTheme': boolean
    }

    interface DesktopLyricSetting {
      'style.lyricPlayedColor': string
    }

    interface DownloadSetting {
      'download.fileName': string
    }

    interface AppSetting {
      version: string
      setting: {
        player: PlayerSetting
        list: ListSetting
        search: SearchSetting
        sync: SyncSetting
        component: ComponentSetting
        theme: ThemeSetting
        other: OtherSetting
        userApi: UserApi
        common: CommonSetting
        desktopLyric: DesktopLyricSetting
        download: DownloadSetting
      }
    }
  }
}
