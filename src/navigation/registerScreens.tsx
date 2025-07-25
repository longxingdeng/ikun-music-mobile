// @flow

import { Navigation } from 'react-native-navigation'
import { View, Text } from 'react-native'

import {
  Home,
  PlayDetail,
  SonglistDetail,
  Comment,
  // Setting,
} from '@/screens'
import { Provider } from '@/store/Provider'

import {
  HOME_SCREEN,
  PLAY_DETAIL_SCREEN,
  SONGLIST_DETAIL_SCREEN,
  COMMENT_SCREEN,
  VERSION_MODAL,
  PACT_MODAL,
  SYNC_MODE_MODAL,
  // SETTING_SCREEN,
} from './screenNames'
import VersionModal from './components/VersionModal'
import PactModal from './components/PactModal'
import SyncModeModal from './components/SyncModeModal'

function WrappedComponent(Component: any) {
  return function inject(props: Record<string, any>) {
    console.log(`🔧 Wrapping component with props:`, Object.keys(props || {}))

    const EnhancedComponent = () => {
      console.log(`🎨 Rendering enhanced component: ${Component.name || 'Unknown'}`)
      try {
        return (
          <Provider>
            <Component {...props} />
          </Provider>
        )
      } catch (error) {
        console.error(`❌ Error rendering component ${Component.name}:`, error)
        // 返回一个简单的错误显示组件而不是崩溃
        return (
          <Provider>
            <View style={{ padding: 20, backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                Error loading component: {error.message}
              </Text>
            </View>
          </Provider>
        )
      }
    }

    return <EnhancedComponent />
  }
}

export default () => {
  console.log('🔧 Starting screen registration...')

  try {
    console.log(`📱 Registering ${HOME_SCREEN}...`)
    Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(Home))

    console.log(`📱 Registering ${PLAY_DETAIL_SCREEN}...`)
    Navigation.registerComponent(PLAY_DETAIL_SCREEN, () => WrappedComponent(PlayDetail))

    console.log(`📱 Registering ${SONGLIST_DETAIL_SCREEN}...`)
    Navigation.registerComponent(SONGLIST_DETAIL_SCREEN, () => WrappedComponent(SonglistDetail))

    console.log(`📱 Registering ${COMMENT_SCREEN}...`)
    Navigation.registerComponent(COMMENT_SCREEN, () => WrappedComponent(Comment))

    console.log(`📱 Registering ${VERSION_MODAL}...`)
    Navigation.registerComponent(VERSION_MODAL, () => WrappedComponent(VersionModal))

    console.log(`📱 Registering ${PACT_MODAL}...`)
    Navigation.registerComponent(PACT_MODAL, () => WrappedComponent(PactModal))

    console.log(`📱 Registering ${SYNC_MODE_MODAL}...`)
    Navigation.registerComponent(SYNC_MODE_MODAL, () => WrappedComponent(SyncModeModal))

    // Navigation.registerComponent(SETTING_SCREEN, () => WrappedComponent(Setting))

    console.log('✅ All screens have been registered successfully!')
  } catch (error) {
    console.error('❌ Error during screen registration:', error)
    throw error
  }
}
