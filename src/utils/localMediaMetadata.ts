import { temporaryDirectoryPath, readDir, unlink, extname } from '@/utils/fs'
import { readPic as _readPic, readMetadata as _readMetadata, type MusicMetadata, type MusicMetadataFull } from 'react-native-local-media-metadata'

export {
  type MusicMetadata,
  type MusicMetadataFull,
  writeMetadata,
  writePic,
  readLyric,
  writeLyric,
} from 'react-native-local-media-metadata'

let cleared = false
const picCachePath = temporaryDirectoryPath + '/local-media-metadata'

export const readMetadata = async(filePath: string): Promise<MusicMetadataFull | null> => {
  const metadata = await _readMetadata(filePath)
  if (metadata?.type == 'flac') {
    metadata.picture = await readPic(filePath)
  }
  return metadata
}

export const scanAudioFiles = async (dirPath: string) => {
  const files = await readDir(dirPath)
  return files
    .filter((file) => {
      if (file.mimeType?.startsWith('audio/')) return true
      if (extname(file?.name ?? '') === 'ogg') return true
      return false
    })
    .map((file) => file)
}

// 支持的音频文件扩展名
const SUPPORTED_AUDIO_EXTENSIONS = [
  'mp3', 'flac', 'wav', 'aac', 'm4a', 'ogg', 'wma', 'ape', 'opus'
]

// 递归扫描音频文件
export const scanAudioFilesRecursive = async (
  dirPath: string,
  onProgress?: (current: number, total: number, currentPath: string) => void,
  maxDepth: number = 10,
  currentDepth: number = 0
): Promise<import('@/utils/fs').FileType[]> => {
  if (currentDepth >= maxDepth) return []

  try {
    const files = await readDir(dirPath)
    const audioFiles: import('@/utils/fs').FileType[] = []
    const directories: import('@/utils/fs').FileType[] = []

    // 分离文件和目录
    for (const file of files) {
      if (file.isDirectory) {
        directories.push(file)
      } else {
        const ext = extname(file?.name ?? '').toLowerCase()
        if (file.mimeType?.startsWith('audio/') || SUPPORTED_AUDIO_EXTENSIONS.includes(ext)) {
          audioFiles.push(file)
        }
      }
    }

    let processedCount = 0
    const totalItems = audioFiles.length + directories.length

    // 报告当前目录的音频文件
    for (const file of audioFiles) {
      processedCount++
      onProgress?.(processedCount, totalItems, file.path)
    }

    // 递归扫描子目录
    for (const dir of directories) {
      try {
        const subFiles = await scanAudioFilesRecursive(
          dir.path,
          onProgress,
          maxDepth,
          currentDepth + 1
        )
        audioFiles.push(...subFiles)
        processedCount++
        onProgress?.(processedCount, totalItems, dir.path)
      } catch (error) {
        console.warn(`Failed to scan directory: ${dir.path}`, error)
      }
    }

    return audioFiles
  } catch (error) {
    console.warn(`Failed to read directory: ${dirPath}`, error)
    return []
  }
}

const clearPicCache = async () => {
  await unlink(picCachePath)
  cleared = true
}

export const readPic = async (dirPath: string): Promise<string> => {
  if (!cleared) await clearPicCache()
  return _readPic(dirPath, picCachePath)
}

// export interface MusicMetadata {
//   type: 'mp3' | 'flac' | 'ogg' | 'wav'
//   bitrate: string
//   interval: number
//   size: number
//   ext: 'mp3' | 'flac' | 'ogg' | 'wav'
//   albumName: string
//   singer: string
//   name: string
// }
// export const readMetadata = async(filePath: string): Promise<MusicMetadata | null> => {
//   return LocalMediaModule.readMetadata(filePath)
// }

// export const readPic = async(filePath: string): Promise<string> => {
//   return LocalMediaModule.readPic(filePath)
// }

// export const readLyric = async(filePath: string): Promise<string> => {
//   return LocalMediaModule.readLyric(filePath)
// }
