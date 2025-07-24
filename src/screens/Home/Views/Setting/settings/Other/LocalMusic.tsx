import { memo, useState } from 'react'
import { View } from 'react-native'

import SubTitle from '../../components/SubTitle'
import { useI18n } from '@/lang'
import Button from '@/components/common/Button'
import { scanMusic } from '@/core/localMusicScanner'

export default memo(() => {
  const t = useI18n()
  const [isScaning, setIsScaning] = useState(false)

  const handleScan = () => {
    if (isScaning) return
    setIsScaning(true)
    scanMusic().finally(() => {
      setIsScaning(false)
    })
  }

  return (
    <View>
      <SubTitle title={t('setting_other_local_music')}>
        <Button onPress={handleScan}>{isScaning ? t('setting_other_local_music_scaning') : t('setting_other_local_music_scan_button')}</Button>
      </SubTitle>
    </View>
  )
})