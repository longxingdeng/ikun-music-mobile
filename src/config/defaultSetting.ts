import { version } from '../../package.json'
import { NAV_SHEAR_TYPES, PLAYER_QUALITY_LEVELS } from './constant'
import { getSystemTheme } from '@/utils/tools'

export const currentSttingVersion = '2.2.0'

const themeId = 'blue_plus'
const systemTheme = getSystemTheme()

export const defaultSetting: LX.AppSetting = {
  version: currentSttingVersion,
  setting: {
    player: {
      mediaDeviceName: 'System Default',
      mediaDeviceId: 'default',
      isHandleAudioFocus: true,
      isS2t: false,
      isShowLyricTranslation: true,
      isShowLyricRoma: false,
      isSavePlayTime: true,
      isAutoCleanPlayedList: false,
      playbackRate: 1,
      cacheSize: '0',
      isPlayHighQuality: false,
      isUseAudioOffload: false,
      isShowNotificationImage: true,
      isShowBluetoothLyric: false,
      quality: PLAYER_QUALITY_LEVELS.HQ,
    },
    list: {
      isClickPlayList: false,
      isShowSource: true,
      isShowInterval: true,
      addMusicLocationType: 'top',
      isShowAlbumName: true,
      'local.isScanMusic': false,
      'local.dirPath': '',
    },
    search: {
      searchHistory: true,
      hotSearch: true,
    },
    sync: {
      enable: false,
      port: '23332',
      address: [],
      serverName: '',
      latestAddress: null,
    },
    component: {
      drawerLayoutPosition: 'left',
      isShowAnimation: true,
      randomAnimate: true,
      isShowBackBtn: true,
      isShowExitBtn: true,
      isFocusSearchBox: true,
      isAutoHiddenPlayBar: false,
      isSohwPlayBarProgress: true,
      isAlwaysKeepStatusBar: false,
    },
    theme: {
      id: themeId,
      isDark: systemTheme == 'dark',
      lightId: themeId,
      darkId: 'black',
      fontAliasing: true,
      fontLighter: false,
      dynamicBg: false,
      hideBgDark: false,
      autoDarkMode: false,
    },
    other: {
      isAutoClearCache: false,
      isAgreePact: false,
      pactVersion: version,
      isFirstRunning: true,
      startupAutoPlay: false,
      startupPushPlayDetailScreen: false,
      sourceNameType: 'alias',
      shareType: NAV_SHEAR_TYPES.progress,
      isEnableSyncLog: false,
      isEnableUserApiLog: false,
      isUseSystemFileSelector: false,
      isScanMusicIsMusic: true,
    },
    userApi: {
      userApi: [],
      userApi_v2: [],
      allowShowUpdateAlert: true,
    },
  },
}

export const defaultSettingRaw: LX.AppSetting = Object.assign({}, defaultSetting)
