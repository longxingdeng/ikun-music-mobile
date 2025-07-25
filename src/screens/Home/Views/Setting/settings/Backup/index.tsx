import { memo, useRef } from 'react'
import { StyleSheet, View } from 'react-native'

// import { gzip, ungzip } from 'pako'

import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'
import { useI18n } from '@/lang'
import ListImportExport, { type ListImportExportType } from './ListImportExport'
import { localMusicScanner } from '@/core/localMusicScanner'
import { toast } from '@/utils/tools'

export default memo(() => {
  const t = useI18n()
  const listImportExportRef = useRef<ListImportExportType>(null)

  const handleScan = () => {
    if (localMusicScanner.scanning) return
    toast(t('setting_backup_part_scan_local_music_start_tip'))
    localMusicScanner.scanAllMusic({
      onComplete(musicList) {
        toast(t('setting_backup_part_scan_local_music_complete_tip', { num: musicList.length }))
      },
      onError(err) {
        toast(t('setting_backup_part_scan_local_music_error_tip', { message: err.message }))
      },
    })
  }

  return (
    <>
      <SubTitle title={t('setting_backup_part')}>
        <View style={styles.list}>
          <Button onPress={() => listImportExportRef.current?.import()}>
            {t('setting_backup_part_import_list')}
          </Button>
          <Button onPress={() => listImportExportRef.current?.export()}>
            {t('setting_backup_part_export_list')}
          </Button>
          <Button onPress={handleScan}>
            {t('setting_backup_part_scan_local_music')}
          </Button>
          {/* <Button onPress={() => importAndExportData('import', 'setting')}>{t('setting_backup_part_import_setting')}</Button>
          <Button onPress={() => importAndExportData('export', 'setting')}>{t('setting_backup_part_export_setting')}</Button> */}
        </View>
      </SubTitle>
      {/* <SubTitle title={t('setting_backup_all')}>
        <View style={styles.list}>
          <Button onPress={() => importAndExportData('import', 'all')}>{t('setting_backup_all_import')}</Button>
          <Button onPress={() => importAndExportData('export', 'all')}>{t('setting_backup_all_export')}</Button>
        </View>
      </SubTitle> */}
      <ListImportExport ref={listImportExportRef} />
    </>
  )
})

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
})
