import { initSetting, showPactModal } from '@/core/common'
import registerPlaybackService from '@/plugins/player/service'
import initTheme from './theme'
import initI18n from './i18n'
import initUserApi from './userApi'
import initPlayer from './player'
import dataInit from './dataInit'
import initSync from './sync'
import initCommonState from './common'
import { initDeeplink } from './deeplink'
import { setApiSource } from '@/core/apiSource'
import commonActions from '@/store/common/action'
import settingState from '@/store/setting/state'
import { checkUpdate } from '@/core/version'
import { bootLog } from '@/utils/bootLog'
import { cheatTip } from '@/utils/tools'

let isFirstPush = true
const handlePushedHomeScreen = async () => {
  await cheatTip()
  if (settingState.setting['common.isAgreePact']) {
    if (isFirstPush) {
      isFirstPush = false
      void checkUpdate()
      void initDeeplink()
    }
  } else {
    if (isFirstPush) isFirstPush = false
    showPactModal()
  }
}

let isInited = false
export default async () => {
  console.log('🔧 Core initialization starting...')
  if (isInited) {
    console.log('✅ Core already initialized, returning handler')
    return handlePushedHomeScreen
  }

  try {
    bootLog('Initing...')
    console.log('📝 Setting font size...')
    commonActions.setFontSize(global.lx.fontSize)
    bootLog('Font size changed.')
    console.log(`✅ Font size set to: ${global.lx.fontSize}`)

    console.log('⚙️ Initializing settings...')
    const setting = await initSetting()
    bootLog('Setting inited.')
    console.log('✅ Settings initialized successfully')

    console.log('🎨 Initializing theme...')
    await initTheme(setting)
    bootLog('Theme inited.')
    console.log('✅ Theme initialized successfully')

    console.log('🌍 Initializing i18n...')
    await initI18n(setting)
    bootLog('I18n inited.')
    console.log('✅ I18n initialized successfully')

    console.log('👤 Initializing user API...')
    await initUserApi(setting)
    bootLog('User Api inited.')
    console.log('✅ User API initialized successfully')

    console.log('🔗 Setting API source...')
    setApiSource(setting['common.apiSource'])
    bootLog('Api inited.')
    console.log(`✅ API source set to: ${setting['common.apiSource']}`)

    console.log('🎵 Registering playback service...')
    registerPlaybackService()
    bootLog('Playback Service Registered.')
    console.log('✅ Playback service registered successfully')

    console.log('▶️ Initializing player...')
    await initPlayer(setting)
    bootLog('Player inited.')
    console.log('✅ Player initialized successfully')

    console.log('📊 Initializing data...')
    await dataInit(setting)
    bootLog('Data inited.')
    console.log('✅ Data initialized successfully')

    console.log('🔧 Initializing common state...')
    await initCommonState(setting)
    bootLog('Common State inited.')
    console.log('✅ Common state initialized successfully')

    console.log('🔄 Initializing sync (async)...')
    void initSync(setting)
    bootLog('Sync inited.')
    console.log('✅ Sync initialization started')

    isInited ||= true
    console.log('🎯 Core initialization completed successfully')

    return handlePushedHomeScreen
  } catch (error) {
    console.error('❌ Critical error during core initialization:', error)
    bootLog(`Core init failed: ${error.message}`)
    throw error
  }
}
