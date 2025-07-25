import '@/utils/errorHandle'
import { init as initLog } from '@/utils/log'
import { bootLog, getBootLog } from '@/utils/bootLog'
import '@/config/globalData'
import { getFontSize } from '@/utils/data'
import { exitApp } from './utils/nativeModules/utils'
import { windowSizeTools } from './utils/windowSizeTools'
import { listenLaunchEvent } from './navigation/regLaunchedEvent'
import { tipDialog } from './utils/tools'
import { Platform } from 'react-native'

console.log('🚀 Starting ikun-music-mobile app...')
console.log('🔧 Environment:', process.env.NODE_ENV || 'unknown')
console.log('📱 Platform:', Platform.OS)
console.log('⏰ Startup time:', new Date().toISOString())

console.log('👂 Setting up launch event listener...')
listenLaunchEvent()

console.log('🔧 Initializing core systems...')
void Promise.all([getFontSize(), windowSizeTools.init()])
  .then(async ([fontSize]) => {
    console.log(`📏 Font size loaded: ${fontSize}`)
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
      console.log('🔧 Starting app initialization...')

      try {
        void initLog()
        console.log('📝 Log system initialized')

        const { default: init } = await import('@/core/init')
        console.log('📦 Core init module loaded')

        handlePushedHomeScreen = await init()
        console.log('✅ Core initialization completed')

        isInited ||= true
        console.log('🎯 App marked as initialized')
      } catch (err: any) {
        console.error('❌ Critical error during initialization:', err)

        // 不要立即退出，而是显示错误信息并允许用户选择
        void tipDialog({
          title: '初始化失败 (Init Failed)',
          message: `应用初始化失败，请检查网络连接或重启应用。\n\nBoot Log:\n${tryGetBootLog()}\n\nError Details:\n${(err.stack ?? err.message) as string}`,
          btnText: 'Retry',
          bgClose: false,
        }).then(() => {
          // 给用户重试的机会，而不是直接退出
          console.log('🔄 User chose to retry initialization')
          setTimeout(() => {
            isInited = false
            void handleInit()
          }, 1000)
        })
        return
      }
    }
    const { init: initNavigation, navigations } = await import('@/navigation')

    initNavigation(async () => {
      console.log('🚀 Navigation initialized, starting app initialization...')
      try {
        await handleInit()
        if (!isInited) {
          console.error('❌ App initialization failed - isInited is false')
          // 不要直接返回，而是显示错误信息
          void tipDialog({
            title: '初始化未完成 (Initialization Incomplete)',
            message: `应用初始化未完成，可能是由于网络问题或资源加载失败。\n\nBoot Log:\n${tryGetBootLog()}`,
            btnText: 'Retry',
            bgClose: false,
          }).then(() => {
            setTimeout(() => {
              isInited = false
              void handleInit()
            }, 1000)
          })
          return
        }
        console.log('✅ App initialization completed, pushing home screen...')
        // import('@/utils/nativeModules/cryptoTest')

        await navigations
          .pushHomeScreen()
          .then(() => {
            console.log('🏠 Home screen pushed successfully')
            void handlePushedHomeScreen()
          })
          .catch((err: any) => {
            console.error('❌ Failed to push home screen:', err)
            void tipDialog({
              title: 'Navigation Error',
              message: `无法加载主屏幕，这可能是导航系统问题。\n\nError: ${err.message}\n\nBoot Log:\n${tryGetBootLog()}`,
              btnText: 'Retry',
              bgClose: false,
            }).then(() => {
              // 重试推送主屏幕
              console.log('🔄 Retrying home screen push...')
              setTimeout(() => {
                void navigations.pushHomeScreen().catch((retryErr) => {
                  console.error('❌ Retry failed, exiting app:', retryErr)
                  exitApp()
                })
              }, 1000)
            })
          })
      } catch (err: any) {
        console.error('❌ Critical error during navigation initialization:', err)
        void tipDialog({
          title: 'Critical Error',
          message: `导航系统初始化失败，这是一个严重错误。\n\nError: ${err.message}\n\nBoot Log:\n${tryGetBootLog()}`,
          btnText: 'Exit',
          bgClose: false,
        }).then(() => {
          exitApp()
        })
      }
    })
  })
  .catch((err) => {
    console.error('❌ Critical error in main initialization:', err)
    void tipDialog({
      title: '启动失败 (Startup Failed)',
      message: `应用启动时发生严重错误，可能是由于系统兼容性问题。\n\nError Details:\n${(err.stack ?? err.message) as string}`,
      btnText: 'Exit',
      bgClose: false,
    }).then(() => {
      exitApp()
    })
  })
