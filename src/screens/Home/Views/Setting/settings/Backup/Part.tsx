import { memo, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'

// import { gzip, ungzip } from 'pako'

import SubTitle from '../../components/SubTitle'
import Button from '../../components/Button'
import CheckBox from '../../components/CheckBoxItem'
import { useI18n } from '@/lang'
import ListImportExport, { type ListImportExportType } from './ListImportExport'
import { localMusicScanner } from '@/core/localMusicScanner'
import { toast } from '@/utils/tools'
import { selectDir } from '@/utils/fs'
import { updateSetting } from '@/core/common'
import { useSetting } from '@/store/setting/hook'

export default memo(() => {
  const t = useI18n()
  const listImportExportRef = useRef<ListImportExportType>(null)
  const [isScanAll, setIsScanAll] = useState(false)
  const setting = useSetting()
  const [isScanMusic, setIsScanMusic] = useState(setting['list.local.isScanMusic'])

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
      isScanMusic,
      includeSystemDirs: isScanAll,
    })
  }

  const handleSelectDir = async() => {
    const path = await selectDir({})
    if (!path) return
    updateSetting({ 'list.local.dirPath': path })
  }

  const handleSetIsScanMusic = (isScanMusic: boolean) => {
    updateSetting({ 'list.local.isScanMusic': isScanMusic })
    setIsScanMusic(isScanMusic)
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
          <Button onPress={handleSelectDir}>
            {t('setting_backup_part_scan_local_music_folder_desc')}
          </Button>
          {/* <Button onPress={() => importAndExportData('import', 'setting')}>{t('setting_backup_part_import_setting')}</Button>
          <Button onPress={() => importAndExportData('export', 'setting')}>{t('setting_backup_part_export_setting')}</Button> */}
        </View>
        <View style={styles.options}>
          <CheckBox check={isScanMusic} label={t('setting_backup_part_scan_local_music_is_music')} onChange={handleSetIsScanMusic} />
          <CheckBox check={isScanAll} label={t('setting_backup_part_scan_local_music_full')} onChange={setIsScanAll} />
        </View>
      </SubTitle>
      {/* <SubTitle title={t('setting_backup_all')}>
        <View style={styles.list}>
          <Button onPress={() => importAndExportData('import', 'all')}>{t('setting_backup_all_import')}</Button>
          <Button onPress={() => importAndExportData('export', 'all')}>{t('setting_backup_all_export')}</Button>
        </View>
      </SubTitle> */}
      <ListImportExport ref={listImportExportRef} isScanMusic={isScanMusic} />
    </>
  )
})

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
  options: {
    marginTop: 5,
  },
})
