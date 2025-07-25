import { Navigation } from 'react-native-navigation'
import * as screenNames from './screenNames'
import * as navigations from './navigation'

import registerScreens from './registerScreens'
import { removeComponentId } from '@/core/common'
import { onAppLaunched } from './regLaunchedEvent'

let unRegisterEvent: ReturnType<
  ReturnType<typeof Navigation.events>['registerScreenPoppedListener']
>

const init = (callback: () => void | Promise<void>) => {
  console.log('🔧 Initializing React Native Navigation...')

  try {
    // Register all screens on launch
    console.log('📱 Registering screens...')
    registerScreens()
    console.log('✅ Screens registered successfully')

    if (unRegisterEvent) {
      console.log('🧹 Removing previous event listener')
      unRegisterEvent.remove()
    }

    console.log('⚙️ Setting default navigation options...')
    Navigation.setDefaultOptions({
      animations: {
        setRoot: {
          waitForRender: true,
        },
      },
      layout: {
        backgroundColor: '#000000', // 设置默认背景色防止白屏
        componentBackgroundColor: '#000000',
      },
    })
    console.log('✅ Default options set')

    console.log('👂 Registering screen popped listener...')
    unRegisterEvent = Navigation.events().registerScreenPoppedListener(({ componentId }) => {
      console.log(`🔙 Screen popped: ${componentId}`)
      removeComponentId(componentId)
    })

    console.log('🚀 Setting up app launched callback...')
    onAppLaunched(async () => {
      console.log('🎯 App launched callback triggered')
      try {
        await callback()
        console.log('✅ App initialization callback completed')
      } catch (error) {
        console.error('❌ Error in app initialization callback:', error)
      }
    })

    console.log('✅ Navigation initialization completed')
  } catch (error) {
    console.error('❌ Error during navigation initialization:', error)
    throw error
  }
}

export * from './utils'
export * from './event'
export * from './hooks'

export { init, screenNames, navigations }
