import { scanAudioFilesRecursive, readMetadata, type MusicMetadataFull } from '@/utils/localMediaMetadata'
import { getExternalStoragePaths, externalStorageDirectoryPath } from '@/utils/fs'
import { buildLocalMusicInfo } from '@/screens/Home/Views/Mylist/MyList/listAction'
import { toast } from '@/utils/tools'
import { log } from '@/utils/log'
import BackgroundTimer from 'react-native-background-timer'

export interface ScanProgress {
  current: number
  total: number
  currentPath: string
  phase: 'scanning' | 'reading_metadata' | 'completed' | 'error'
  foundFiles: number
}

export interface LocalMusicScannerOptions {
  onProgress?: (progress: ScanProgress) => void
  onComplete?: (musicList: LX.Music.MusicInfoLocal[]) => void
  onError?: (error: Error) => void
  maxDepth?: number
  includeSystemDirs?: boolean
}

class LocalMusicScanner {
  private isScanning = false
  private shouldStop = false
  private currentScanId = 0

  /**
   * 扫描设备中的所有音乐文件
   */
  async scanAllMusic(options: LocalMusicScannerOptions = {}): Promise<LX.Music.MusicInfoLocal[]> {
    if (this.isScanning) {
      throw new Error('Scanner is already running')
    }

    this.isScanning = true
    this.shouldStop = false
    const scanId = ++this.currentScanId

    try {
      const {
        onProgress,
        onComplete,
        onError,
        maxDepth = 8,
        includeSystemDirs = false
      } = options

      // 获取所有存储路径
      const storagePaths = await this.getStoragePaths(includeSystemDirs)
      log.info('LocalMusicScanner', `Found storage paths: ${storagePaths.join(', ')}`)

      let allAudioFiles: import('@/utils/fs').FileType[] = []
      let totalScannedDirs = 0

      // 第一阶段：扫描文件
      onProgress?.({
        current: 0,
        total: storagePaths.length,
        currentPath: '',
        phase: 'scanning',
        foundFiles: 0
      })

      for (let i = 0; i < storagePaths.length; i++) {
        if (this.shouldStop || scanId !== this.currentScanId) break

        const storagePath = storagePaths[i]
        try {
          const files = await scanAudioFilesRecursive(
            storagePath,
            (current, total, currentPath) => {
              if (this.shouldStop || scanId !== this.currentScanId) return
              onProgress?.({
                current: i,
                total: storagePaths.length,
                currentPath,
                phase: 'scanning',
                foundFiles: allAudioFiles.length
              })
            },
            maxDepth
          )
          allAudioFiles.push(...files)
          totalScannedDirs++
        } catch (error) {
          log.warn('LocalMusicScanner', `Failed to scan storage path: ${storagePath}`, error)
        }

        onProgress?.({
          current: i + 1,
          total: storagePaths.length,
          currentPath: storagePath,
          phase: 'scanning',
          foundFiles: allAudioFiles.length
        })
      }

      if (this.shouldStop || scanId !== this.currentScanId) {
        throw new Error('Scan was cancelled')
      }

      log.info('LocalMusicScanner', `Found ${allAudioFiles.length} audio files`)

      // 第二阶段：读取元数据
      const musicList: LX.Music.MusicInfoLocal[] = []
      const batchSize = 5 // 批量处理，避免内存占用过高

      for (let i = 0; i < allAudioFiles.length; i += batchSize) {
        if (this.shouldStop || scanId !== this.currentScanId) break

        const batch = allAudioFiles.slice(i, i + batchSize)
        const batchPromises = batch.map(async (file) => {
          try {
            const metadata = await readMetadata(file.path)
            if (metadata) {
              return buildLocalMusicInfo(file.path, metadata)
            }
          } catch (error) {
            log.warn('LocalMusicScanner', `Failed to read metadata for: ${file.path}`, error)
          }
          return null
        })

        const batchResults = await Promise.all(batchPromises)
        const validResults = batchResults.filter((result): result is LX.Music.MusicInfoLocal => result !== null)
        musicList.push(...validResults)

        onProgress?.({
          current: Math.min(i + batchSize, allAudioFiles.length),
          total: allAudioFiles.length,
          currentPath: batch[0]?.path || '',
          phase: 'reading_metadata',
          foundFiles: musicList.length
        })

        // 让出执行权，避免阻塞UI
        await new Promise(resolve => BackgroundTimer.setTimeout(resolve, 10))
      }

      if (this.shouldStop || scanId !== this.currentScanId) {
        throw new Error('Scan was cancelled')
      }

      // 完成
      onProgress?.({
        current: allAudioFiles.length,
        total: allAudioFiles.length,
        currentPath: '',
        phase: 'completed',
        foundFiles: musicList.length
      })

      log.info('LocalMusicScanner', `Scan completed. Found ${musicList.length} valid music files`)
      onComplete?.(musicList)
      return musicList

    } catch (error) {
      const err = error as Error
      log.error('LocalMusicScanner', 'Scan failed', err)
      onError?.(err)
      throw err
    } finally {
      this.isScanning = false
    }
  }

  /**
   * 停止当前扫描
   */
  stopScan(): void {
    this.shouldStop = true
    this.currentScanId++
  }

  /**
   * 检查是否正在扫描
   */
  get scanning(): boolean {
    return this.isScanning
  }

  /**
   * 获取存储路径
   */
  private async getStoragePaths(includeSystemDirs: boolean): Promise<string[]> {
    const paths: string[] = []

    try {
      // 获取外部存储路径
      const externalPaths = await getExternalStoragePaths()
      paths.push(...externalPaths)
    } catch (error) {
      log.warn('LocalMusicScanner', 'Failed to get external storage paths', error)
    }

    // 添加默认存储路径
    if (externalStorageDirectoryPath) {
      paths.push(externalStorageDirectoryPath)
    }

    // 常见的音乐目录
    const commonMusicDirs = [
      '/storage/emulated/0/Music',
      '/storage/emulated/0/Download',
      '/storage/emulated/0/Downloads',
      '/sdcard/Music',
      '/sdcard/Download',
      '/sdcard/Downloads'
    ]

    if (includeSystemDirs) {
      paths.push(...commonMusicDirs)
    } else {
      // 只添加Music目录
      paths.push('/storage/emulated/0/Music', '/sdcard/Music')
    }

    // 去重并过滤有效路径
    return [...new Set(paths)].filter(path => path && path.length > 0)
  }
}

// 导出单例实例
export const localMusicScanner = new LocalMusicScanner()
