import { Navigation } from 'react-native-navigation'

let launched = false
const handlers: Array<() => void> = []

export const listenLaunchEvent = () => {
  console.log('🔧 Setting up React Native Navigation launch event listener')

  // 注册应用启动监听器
  Navigation.events().registerAppLaunchedListener(() => {
    console.log('🚀 React Native Navigation app launched event received')
    launched = true

    // 使用 setTimeout 而不是 setImmediate 来确保更好的兼容性
    setTimeout(() => {
      console.log(`📱 Executing ${handlers.length} launch handlers`)
      try {
        for (const handler of handlers) {
          console.log('🔄 Executing launch handler...')
          handler()
        }
        console.log('✅ All launch handlers executed successfully')
      } catch (error) {
        console.error('❌ Error executing launch handlers:', error)
      }
    }, 0)
  })

  // 添加组件出现监听器作为备用
  Navigation.events().registerComponentDidAppearListener(({ componentName }) => {
    console.log(`📺 Component appeared: ${componentName}`)
    if (!launched && componentName === 'HOME_SCREEN') {
      console.log('🔄 Triggering launch handlers from component appear event')
      launched = true
      setTimeout(() => {
        for (const handler of handlers) {
          try {
            handler()
          } catch (error) {
            console.error('❌ Error in backup launch handler:', error)
          }
        }
      }, 100)
    }
  })
}

export const onAppLaunched = (handler: () => void) => {
  console.log('📝 Registering launch handler')
  handlers.push(handler)
  if (launched) {
    console.log('🏃 App already launched, executing handler immediately')
    setTimeout(() => {
      try {
        handler()
      } catch (error) {
        console.error('❌ Error in immediate launch handler:', error)
      }
    }, 0)
  }
}
