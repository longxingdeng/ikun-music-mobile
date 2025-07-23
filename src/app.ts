import '@/utils/errorHandle'
import { init as initLog } from '@/utils/log'
import { bootLog, getBootLog } from '@/utils/bootLog'
import '@/config/globalData'
import { getFontSize } from '@/utils/data'
import { exitApp } from './utils/nativeModules/utils'
import { windowSizeTools } from './utils/windowSizeTools'
import { listenLaunchEvent } from './navigation/regLaunchedEvent'
import { tipDialog } from './utils/tools'

console.log('starting app...')
console.log('Environment:', __DEV__ ? 'development' : 'production')
listenLaunchEvent()

void Promise.all([getFontSize(), windowSizeTools.init()])
  .then(async ([fontSize]) => {
    global.lx.fontSize = fontSize
    bootLog('Font size setting loaded.')

    let isInited = false
    let handlePushedHomeScreen: () => void | Promise<void>

    const tryGetBootLog = () => {
      try {
        return getBootLog()
      } catch (err) {
        return 'Get boot log failed.'
      }
    }

    const handleInit = async () => {
      if (isInited) return
      void initLog()
      const { default: init } = await import('@/core/init')
      try {
        handlePushedHomeScreen = await init()
      } catch (err: any) {
        void tipDialog({
          title: '初始化失败 (Init Failed)',
          message: `Boot Log:\n${tryGetBootLog()}\n\n${(err.stack ?? err.message) as string}`,
          btnText: 'Exit',
          bgClose: false,
        }).then(() => {
          exitApp()
        })
        return
      }
      isInited ||= true
    }
    const { init: initNavigation, navigations } = await import('@/navigation')

    initNavigation(async () => {
      console.log('Navigation initialized, starting app initialization...')
      try {
        await handleInit()
        if (!isInited) {
          console.error('App initialization failed - isInited is false')
          return
        }
        console.log('App initialization completed, pushing home screen...')
        // import('@/utils/nativeModules/cryptoTest')

        await navigations
          .pushHomeScreen()
          .then(() => {
            console.log('Home screen pushed successfully')
            void handlePushedHomeScreen()
          })
          .catch((err: any) => {
            console.error('Failed to push home screen:', err)
            void tipDialog({
              title: 'Navigation Error',
              message: `Failed to load home screen:\n${err.message}\n\nBoot Log:\n${tryGetBootLog()}`,
              btnText: 'Exit',
              bgClose: false,
            }).then(() => {
              exitApp()
            })
          })
      } catch (err: any) {
        console.error('Critical error during navigation initialization:', err)
        void tipDialog({
          title: 'Critical Error',
          message: `Navigation initialization failed:\n${err.message}\n\nBoot Log:\n${tryGetBootLog()}`,
          btnText: 'Exit',
          bgClose: false,
        }).then(() => {
          exitApp()
        })
      }
    })
  })
  .catch((err) => {
    void tipDialog({
      title: '初始化失败 (Init Failed)',
      message: `Boot Log:\n\n${(err.stack ?? err.message) as string}`,
      btnText: 'Exit',
      bgClose: false,
    }).then(() => {
      exitApp()
    })
  })
