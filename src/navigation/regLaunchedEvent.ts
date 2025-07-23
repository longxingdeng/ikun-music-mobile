import { Navigation } from 'react-native-navigation'

let launched = false
const handlers: Array<() => void> = []

export const listenLaunchEvent = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    console.log('🚀 React Native Navigation app launched event received')
    launched = true
    setImmediate(() => {
      console.log(`📱 Executing ${handlers.length} launch handlers`)
      for (const handler of handlers) handler()
    })
  })
}

export const onAppLaunched = (handler: () => void) => {
  handlers.push(handler)
  if (launched) {
    setImmediate(() => {
      handler()
    })
  }
}
