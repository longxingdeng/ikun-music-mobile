import { version } from '../../package.json'

export const LATEST_VERSION = version

export const AUTHOR_NAME = 'ikun'
export const APP_NAME = 'IKUN Music'
export const APP_NAME_LOWER = 'ikun-music'
export const APP_ID = 'ikun.music'

export const DOWNLOAD_DIR = 'ikunMusic'

export const USER_API_DIR_NAME = 'user_api'

export const DATA_PATH = 'ikunMusic'
export const DATA_PATH_DESKTOP = 'IKUN Music'

export const PLAY_QUALITYS = ['128k', '320k', 'flac', 'hires', 'master'] as const
export const PLAY_QUALITYS_LOWER = ['128k', '320k', 'flac', 'hires', 'master'] as const

export const RX_PLAYER_WIDTH_NAMES = ['60%', '70%', '80%', '90%', '100%'] as const
export const RX_PLAYER_WIDTHS = [0.6, 0.7, 0.8, 0.9, 1] as const

export const NAV_MENUS = [
  {
    id: 'nav_search',
    name: 'search',
    icon: 'search',
  },
  {
    id: 'nav_love',
    name: 'love',
    icon: 'love-2-line',
  },
  {
    id: 'nav_songlist',
    name: 'songlist',
    icon: 'album-line',
  },
  {
    id: 'nav_top',
    name: 'top',
    icon: 'trophy-line',
  },
  {
    id: 'nav_setting',
    name: 'setting',
    icon: 'setting-4-line',
  },
] as const

export const DARK_THEMES = ['green', 'blue', 'blue_plus', 'naruto', 'black', 'mid_autumn', 'happy_new_year', 'china_ink', 'ming'] as const
export const LIGHT_THEMES = ['blue', 'red', 'green', 'purple', 'pink', 'orange', 'grey', 'brown', 'blue2'] as const

export const LIST_IDS = {
  DEFAULT: 'default',
  LOVE: 'love',
  TEMP: 'temp',
  DOWNLOAD: 'download',
}

export const BOARD_IDS = ['mg__27553319', 'mg__27186466', 'mg__27553408', 'mg__27553426', 'mg__27553446',
  'kw__16', 'kw__17', 'kw__104', 'kw__22', 'kw__158', 'kw__182', 'kw__184', 'kw__185', 'kw__186',
  'kg__8888', 'kg__31308', 'kg__33162', 'kg__23784', 'kg__4681', 'kg__31313', 'kg__21101',
  'tx__4', 'tx__26', 'tx__27', 'tx__52', 'tx__62', 'tx__57', 'tx__58', 'tx__123',
  'wy__19723756', 'wy__3779629', 'wy__3778678', 'wy__2884035', 'wy__991319590', 'wy__1978921795', 'wy__2250011882', 'wy__2617766278',
  'bd__23', 'bd__24', 'bd__25']

export const MUSIC_TOGGLE_MODE = {
  listLoop: 'listLoop',
  random: 'random',
  singleLoop: 'singleLoop',
  list: 'list',
  single: 'single',
} as const

export const SYNC_CODE_VERSIONS = {
  '1.0.0': 1,
  '1.1.0': 2,
} as const
export const SYNC_CODE_VERSION = '1.1.0'
export const SYNC_CODE_VERSION_num = SYNC_CODE_VERSIONS[SYNC_CODE_VERSION]

export const LIST_TAGS = {
  kw: 'http://www.kuwo.cn/api/www/playlist/getTagList?reqId=321f33a0-56bd-11ed-a82d-a54563e6e6e1',
  kg: 'http://www2.kugou.kugou.com/yueku/v9/special/get_all_tag?plat=2&parentid=0&is_smarty=1&version=9108&t=1493282222&show_all=1',
  tx: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?format=json&inCharset=utf-8&outCharset=utf-8',
  wy: 'https://music.163.com/api/playlist/catalogue',
  mg: 'https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/indexTag.do?text=WQ==&type=1',
} as const

export const LIST_SORT = {
  kw: ['new', 'hot'],
  kg: ['new', 'hot'],
  tx: ['new', 'hot'],
  wy: ['new', 'hot'],
  mg: ['new', 'hot', 'hot-collect', 'rise'],
} as const

export const LX_EVENT_PLAYER = {
  play: 'player:play',
  pause: 'player:pause',
  stop: 'player:stop',
  error: 'player:error',
  end: 'player:end',
  status: 'player:status',
  loadstart: 'player:loadstart',
  loadeddata: 'player:loadeddata',
  canplay: 'player:canplay',
  playing: 'player:playing',
  waiting: 'player:waiting',
  progress: 'player:progress',
  timeupdate: 'player:timeupdate',
  get_url: 'player:get_url',
  get_lyric: 'player:get_lyric',
  get_pic: 'player:get_pic',
  get_music_info: 'player:get_music_info',
  set_music_info: 'player:set_music_info',
  music_changed: 'player:music_changed',
  show_desktop_lyric: 'player:show_desktop_lyric',
  hide_desktop_lyric: 'player:hide_desktop_lyric',
  toggle_desktop_lyric: 'player:toggle_desktop_lyric',
  desktop_lyric_config_change: 'player:desktop_lyric_config_change',
  set_volume: 'player:set_volume',
  set_play_rate: 'player:set_play_rate',
  set_playback_rate: 'player:set_playback_rate',
  set_progress: 'player:set_progress',
  set_lyric_offset: 'player:set_lyric_offset',
  set_lyric_align: 'player:set_lyric_align',
  set_lyric_font_size: 'player:set_lyric_font_size',
  set_lyric_is_auto_exit: 'player:set_lyric_is_auto_exit',
  set_lyric_is_show_translation: 'player:set_lyric_is_show_translation',
  set_lyric_is_show_roma: 'player:set_lyric_is_show_roma',
  set_lyric_is_s2t: 'player:set_lyric_is_s2t',
  set_lyric_is_show_progress: 'player:set_lyric_is_show_progress',
} as const

export const LX_EVENT_APP = {
  main_window_inited: 'app:main_window_inited',
  main_window_close: 'app:main_window_close',
  main_window_focus: 'app:main_window_focus',
  main_window_blur: 'app:main_window_blur',
  main_window_minimize: 'app:main_window_minimize',
  main_window_unminimize: 'app:main_window_unminimize',
  main_window_maximize: 'app:main_window_maximize',
  main_window_unmaximize: 'app:main_window_unmaximize',
  main_window_enter_full_screen: 'app:main_window_enter_full_screen',
  main_window_leave_full_screen: 'app:main_window_leave_full_screen',
  tray_click: 'app:tray_click',
  tray_prev_click: 'app:tray_prev_click',
  tray_next_click: 'app:tray_next_click',
  tray_play_click: 'app:tray_play_click',
  tray_pause_click: 'app:tray_pause_click',
  tray_love_click: 'app:tray_love_click',
  tray_unlove_click: 'app:tray_unlove_click',
  tray_close_click: 'app:tray_close_click',
  quit: 'app:quit',
  key_down: 'app:key_down',
  hotkey: 'app:hotkey',
  set_hot_key: 'app:set_hot_key',
  clear_hot_key: 'app:clear_hot_key',
  set_power_save_blocker: 'app:set_power_save_blocker',
  clear_power_save_blocker: 'app:clear_power_save_blocker',
  set_progress_bar: 'app:set_progress_bar',
  show_dialog: 'app:show_dialog',
  show_select_dialog: 'app:show_select_dialog',
  get_data: 'app:get_data',
  get_data_sync: 'app:get_data_sync',
  set_data: 'app:set_data',
  get_path: 'app:get_path',
  get_system_font: 'app:get_system_font',
  get_system_font_sync: 'app:get_system_font_sync',
  open_dir: 'app:open_dir',
  open_dev_tools: 'app:open_dev_tools',
  focus_window: 'app:focus_window',
  close_window: 'app:close_window',
  min_window: 'app:min_window',
  max_window: 'app:max_window',
  fullscreen_window: 'app:fullscreen_window',
  get_window_size: 'app:get_window_size',
  set_window_size: 'app:set_window_size',
  set_window_min_size: 'app:set_window_min_size',
  set_window_max_size: 'app:set_window_max_size',
  set_window_is_always_on_top: 'app:set_window_is_always_on_top',
  set_window_is_ignore_mouse_events: 'app:set_window_is_ignore_mouse_events',
  set_window_is_top_most: 'app:set_window_is_top_most',
  set_window_title: 'app:set_window_title',
  get_lyric_info: 'app:get_lyric_info',
  set_lyric_info: 'app:set_lyric_info',
  get_setting: 'app:get_setting',
  set_setting: 'app:set_setting',
  get_list: 'app:get_list',
  set_list: 'app:set_list',
  get_hot_search_list: 'app:get_hot_search_list',
  set_hot_search_list: 'app:set_hot_search_list',
  get_search_history_list: 'app:get_search_history_list',
  set_search_history_list: 'app:set_search_history_list',
  get_dislike_list: 'app:get_dislike_list',
  set_dislike_list: 'app:set_dislike_list',
  get_user_api_list: 'app:get_user_api_list',
  set_user_api_list: 'app:set_user_api_list',
  get_version_info: 'app:get_version_info',
  get_env_params: 'app:get_env_params',
  get_other_source: 'app:get_other_source',
  set_other_source: 'app:set_other_source',
  get_music_url: 'app:get_music_url',
  set_music_url: 'app:set_music_url',
  get_lyric: 'app:get_lyric',
  set_lyric: 'app:set_lyric',
  get_pic: 'app:get_pic',
  set_pic: 'app:set_pic',
  clear_cache: 'app:clear_cache',
  get_cache_size: 'app:get_cache_size',
  get_lyric_raw: 'app:get_lyric_raw',
  set_lyric_raw: 'app:set_lyric_raw',
  clear_lyric_raw: 'app:clear_lyric_raw',
  get_music_url_raw: 'app:get_music_url_raw',
  set_music_url_raw: 'app:set_music_url_raw',
  clear_music_url_raw: 'app:clear_music_url_raw',
  get_other_source_raw: 'app:get_other_source_raw',
  set_other_source_raw: 'app:set_other_source_raw',
  clear_other_source_raw: 'app:clear_other_source_raw',
  get_leaderboard: 'app:get_leaderboard',
  set_leaderboard: 'app:set_leaderboard',
  get_song_list: 'app:get_song_list',
  set_song_list: 'app:set_song_list',
  get_song_list_detail: 'app:get_song_list_detail',
  set_song_list_detail: 'app:set_song_list_detail',
  get_comment: 'app:get_comment',
  set_comment: 'app:set_comment',
  get_search_tip: 'app:get_search_tip',
  set_search_tip: 'app:set_search_tip',
  get_local_music: 'app:get_local_music',
  set_local_music: 'app:set_local_music',
  get_music_info: 'app:get_music_info',
  set_music_info: 'app:set_music_info',
  get_music_infos: 'app:get_music_infos',
  set_music_infos: 'app:set_music_infos',
  get_music_info_raw: 'app:get_music_info_raw',
  set_music_info_raw: 'app:set_music_info_raw',
  clear_music_info_raw: 'app:clear_music_info_raw',
  get_music_lyric_raw: 'app:get_music_lyric_raw',
  set_music_lyric_raw: 'app:set_music_lyric_raw',
  clear_music_lyric_raw: 'app:clear_music_lyric_raw',
  get_music_pic_raw: 'app:get_music_pic_raw',
  set_music_pic_raw: 'app:set_music_pic_raw',
  clear_music_pic_raw: 'app:clear_music_pic_raw',
  get_music_meta_raw: 'app:get_music_meta_raw',
  set_music_meta_raw: 'app:set_music_meta_raw',
  clear_music_meta_raw: 'app:clear_music_meta_raw',
  get_music_file_path: 'app:get_music_file_path',
  get_music_file_path_sync: 'app:get_music_file_path_sync',
  get_music_file_buffer: 'app:get_music_file_buffer',
  get_music_file_buffer_sync: 'app:get_music_file_buffer_sync',
  get_music_file_base64: 'app:get_music_file_base64',
  get_music_file_base64_sync: 'app:get_music_file_base64_sync',
  get_music_file_meta: 'app:get_music_file_meta',
  get_music_file_meta_sync: 'app:get_music_file_meta_sync',
  write_music_file_meta: 'app:write_music_file_meta',
  write_music_file_meta_sync: 'app:write_music_file_meta_sync',
  get_music_file_lyric: 'app:get_music_file_lyric',
  get_music_file_lyric_sync: 'app:get_music_file_lyric_sync',
  write_music_file_lyric: 'app:write_music_file_lyric',
  write_music_file_lyric_sync: 'app:write_music_file_lyric_sync',
  get_music_file_pic: 'app:get_music_file_pic',
  get_music_file_pic_sync: 'app:get_music_file_pic_sync',
  write_music_file_pic: 'app:write_music_file_pic',
  write_music_file_pic_sync: 'app:write_music_file_pic_sync',
  remove_music_file_pic: 'app:remove_music_file_pic',
  remove_music_file_pic_sync: 'app:remove_music_file_pic_sync',
  get_music_file_ext: 'app:get_music_file_ext',
  get_music_file_ext_sync: 'app:get_music_file_ext_sync',
  get_music_file_type: 'app:get_music_file_type',
  get_music_file_type_sync: 'app:get_music_file_type_sync',
  get_music_file_mime: 'app:get_music_file_mime',
  get_music_file_mime_sync: 'app:get_music_file_mime_sync',
  get_music_file_size: 'app:get_music_file_size',
  get_music_file_size_sync: 'app:get_music_file_size_sync',
  get_music_file_md5: 'app:get_music_file_md5',
  get_music_file_md5_sync: 'app:get_music_file_md5_sync',
  get_music_file_sha256: 'app:get_music_file_sha256',
  get_music_file_sha256_sync: 'app:get_music_file_sha256_sync',
  get_music_file_sha512: 'app:get_music_file_sha512',
  get_music_file_sha512_sync: 'app:get_music_file_sha512_sync',
  get_music_file_sha1: 'app:get_music_file_sha1',
  get_music_file_sha1_sync: 'app:get_music_file_sha1_sync',
  get_music_file_sha3: 'app:get_music_file_sha3',
  get_music_file_sha3_sync: 'app:get_music_file_sha3_sync',
  get_music_file_sha3_224: 'app:get_music_file_sha3_224',
  get_music_file_sha3_224_sync: 'app:get_music_file_sha3_224_sync',
  get_music_file_sha3_256: 'app:get_music_file_sha3_256',
  get_music_file_sha3_256_sync: 'app:get_music_file_sha3_256_sync',
  get_music_file_sha3_384: 'app:get_music_file_sha3_384',
  get_music_file_sha3_384_sync: 'app:get_music_file_sha3_384_sync',
  get_music_file_sha3_512: 'app:get_music_file_sha3_512',
  get_music_file_sha3_512_sync: 'app:get_music_file_sha3_512_sync',
  get_music_file_blake2b512: 'app:get_music_file_blake2b512',
  get_music_file_blake2b512_sync: 'app:get_music_file_blake2b512_sync',
  get_music_file_blake2s256: 'app:get_music_file_blake2s256',
  get_music_file_blake2s256_sync: 'app:get_music_file_blake2s256_sync',
  get_music_file_blake3: 'app:get_music_file_blake3',
  get_music_file_blake3_sync: 'app:get_music_file_blake3_sync',
  get_music_file_crc32: 'app:get_music_file_crc32',
  get_music_file_crc32_sync: 'app:get_music_file_crc32_sync',
  get_music_file_crc32c: 'app:get_music_file_crc32c',
  get_music_file_crc32c_sync: 'app:get_music_file_crc32c_sync',
  get_music_file_crc32b: 'app:get_music_file_crc32b',
  get_music_file_crc32b_sync: 'app:get_music_file_crc32b_sync',
  get_music_file_crc32a: 'app:get_music_file_crc32a',
  get_music_file_crc32a_sync: 'app:get_music_file_crc32a_sync',
  get_music_file_crc32d: 'app:get_music_file_crc32d',
  get_music_file_crc32d_sync: 'app:get_music_file_crc32d_sync',
  get_music_file_crc32q: 'app:get_music_file_crc32q',
  get_music_file_crc32q_sync: 'app:get_music_file_crc32q_sync',
  get_music_file_crc32x: 'app:get_music_file_crc32x',
  get_music_file_crc32x_sync: 'app:get_music_file_crc32x_sync',
  get_music_file_crc32jam: 'app:get_music_file_crc32jam',
  get_music_file_crc32jam_sync: 'app:get_music_file_crc32jam_sync',
  get_music_file_crc32posix: 'app:get_music_file_crc32posix',
  get_music_file_crc32posix_sync: 'app:get_music_file_crc32posix_sync',
  get_music_file_crc32bzip2: 'app:get_music_file_crc32bzip2',
  get_music_file_crc32bzip2_sync: 'app:get_music_file_crc32bzip2_sync',
  get_music_file_crc32citt: 'app:get_music_file_crc32citt',
  get_music_file_crc32citt_sync: 'app:get_music_file_crc32citt_sync',
  get_music_file_crc32darc: 'app:get_music_file_crc32darc',
  get_music_file_crc32darc_sync: 'app:get_music_file_crc32darc_sync',
  get_music_file_crc32genibus: 'app:get_music_file_crc32genibus',
  get_music_file_crc32genibus_sync: 'app:get_music_file_crc32genibus_sync',
  get_music_file_crc32xfer: 'app:get_music_file_crc32xfer',
  get_music_file_crc32xfer_sync: 'app:get_music_file_crc32xfer_sync',
  get_music_file_crc32iso3309: 'app:get_music_file_crc32iso3309',
  get_music_file_crc32iso3309_sync: 'app:get_music_file_crc32iso3309_sync',
  get_music_file_crc32pkware: 'app:get_music_file_crc32pkware',
  get_music_file_crc32pkware_sync: 'app:get_music_file_crc32pkware_sync',
  get_music_file_crc32x25: 'app:get_music_file_crc32x25',
  get_music_file_crc32x25_sync: 'app:get_music_file_crc32x25_sync',
  get_music_file_crc32usb: 'app:get_music_file_crc32usb',
  get_music_file_crc32usb_sync: 'app:get_music_file_crc32usb_sync',
  get_music_file_crc32gsm: 'app:get_music_file_crc32gsm',
  get_music_file_crc32gsm_sync: 'app:get_music_file_crc32gsm_sync',
  get_music_file_crc32lte: 'app:get_music_file_crc32lte',
  get_music_file_crc32lte_sync: 'app:get_music_file_crc32lte_sync',
  get_music_file_crc32cdma2000: 'app:get_music_file_crc32cdma2000',
  get_music_file_crc32cdma2000_sync: 'app:get_music_file_crc32cdma2000_sync',
  get_music_file_crc32dds: 'app:get_music_file_crc32dds',
  get_music_file_crc32dds_sync: 'app:get_music_file_crc32dds_sync',
  get_music_file_crc32dect: 'app:get_music_file_crc32dect',
  get_music_file_crc32dect_sync: 'app:get_music_file_crc32dect_sync',
  get_music_file_crc32dnp: 'app:get_music_file_crc32dnp',
  get_music_file_crc32dnp_sync: 'app:get_music_file_crc32dnp_sync',
  get_music_file_crc32en13757: 'app:get_music_file_crc32en13757',
  get_music_file_crc32en13757_sync: 'app:get_music_file_crc32en13757_sync',
  get_music_file_crc32v42: 'app:get_music_file_crc32v42',
  get_music_file_crc32v42_sync: 'app:get_music_file_crc32v42_sync',
  get_music_file_crc32aixm: 'app:get_music_file_crc32aixm',
  get_music_file_crc32aixm_sync: 'app:get_music_file_crc32aixm_sync',
  get_music_file_crc32autosar: 'app:get_music_file_crc32autosar',
  get_music_file_crc32autosar_sync: 'app:get_music_file_crc32autosar_sync',
  get_music_file_crc32cdrom: 'app:get_music_file_crc32cdrom',
  get_music_file_crc32cdrom_sync: 'app:get_music_file_crc32cdrom_sync',
  get_music_file_crc32mef: 'app:get_music_file_crc32mef',
  get_music_file_crc32mef_sync: 'app:get_music_file_crc32mef_sync',
  get_music_file_crc32mpt1327: 'app:get_music_file_crc32mpt1327',
  get_music_file_crc32mpt1327_sync: 'app:get_music_file_crc32mpt1327_sync',
  get_music_file_crc32profibus: 'app:get_music_file_crc32profibus',
  get_music_file_crc32profibus_sync: 'app:get_music_file_crc32profibus_sync',
  get_music_file_crc32sata: 'app:get_music_file_crc32sata',
  get_music_file_crc32sata_sync: 'app:get_music_file_crc32sata_sync',
  get_music_file_crc32xmodem: 'app:get_music_file_crc32xmodem',
  get_music_file_crc32xmodem_sync: 'app:get_music_file_crc32xmodem_sync',
  get_music_file_crc32zmodem: 'app:get_music_file_crc32zmodem',
  get_music_file_crc32zmodem_sync: 'app:get_music_file_crc32zmodem_sync',
  get_music_file_crc32kermit: 'app:get_music_file_crc32kermit',
  get_music_file_crc32kermit_sync: 'app:get_music_file_crc32kermit_sync',
  get_music_file_crc32modbus: 'app:get_music_file_crc32modbus',
  get_music_file_crc32modbus_sync: 'app:get_music_file_crc32modbus_sync',
  get_music_file_crc32arc: 'app:get_music_file_crc32arc',
  get_music_file_crc32arc_sync: 'app:get_music_file_crc32arc_sync',
  get_music_file_crc32lha: 'app:get_music_file_crc32lha',
  get_music_file_crc32lha_sync: 'app:get_music_file_crc32lha_sync',
  get_music_file_crc32lzh: 'app:get_music_file_crc32lzh',
  get_music_file_crc32lzh_sync: 'app:get_music_file_crc32lzh_sync',
  get_music_file_crc32rar: 'app:get_music_file_crc32rar',
  get_music_file_crc32rar_sync: 'app:get_music_file_crc32rar_sync',
  get_music_file_crc32zip: 'app:get_music_file_crc32zip',
  get_music_file_crc32zip_sync: 'app:get_music_file_crc32zip_sync',
  get_music_file_crc32gzip: 'app:get_music_file_crc32gzip',
  get_music_file_crc32gzip_sync: 'app:get_music_file_crc32gzip_sync',
  get_music_file_crc32bzip2_2: 'app:get_music_file_crc32bzip2_2',
  get_music_file_crc32bzip2_2_sync: 'app:get_music_file_crc32bzip2_2_sync',
  get_music_file_crc32xz: 'app:get_music_file_crc32xz',
  get_music_file_crc32xz_sync: 'app:get_music_file_crc32xz_sync',
  get_music_file_crc32lzma: 'app:get_music_file_crc32lzma',
  get_music_file_crc32lzma_sync: 'app:get_music_file_crc32lzma_sync',
  get_music_file_crc327z: 'app:get_music_file_crc327z',
  get_music_file_crc327z_sync: 'app:get_music_file_crc327z_sync',
  get_music_file_crc32cddvd: 'app:get_music_file_crc32cddvd',
  get_music_file_crc32cddvd_sync: 'app:get_music_file_crc32cddvd_sync',
  get_music_file_crc32dvd: 'app:get_music_file_crc32dvd',
  get_music_file_crc32dvd_sync: 'app:get_music_file_crc32dvd_sync',
  get_music_file_crc32cd: 'app:get_music_file_crc32cd',
  get_music_file_crc32cd_sync: 'app:get_music_file_crc32cd_sync',
  get_music_file_crc32dvd_r: 'app:get_music_file_crc32dvd_r',
  get_music_file_crc32dvd_r_sync: 'app:get_music_file_crc32dvd_r_sync',
  get_music_file_crc32dvd_rw: 'app:get_music_file_crc32dvd_rw',
  get_music_file_crc32dvd_rw_sync: 'app:get_music_file_crc32dvd_rw_sync',
  get_music_file_crc32dvd_ram: 'app:get_music_file_crc32dvd_ram',
  get_music_file_crc32dvd_ram_sync: 'app:get_music_file_crc32dvd_ram_sync',
  get_music_file_crc32dvd_plus_r: 'app:get_music_file_crc32dvd_plus_r',
  get_music_file_crc32dvd_plus_r_sync: 'app:get_music_file_crc32dvd_plus_r_sync',
  get_music_file_crc32dvd_plus_rw: 'app:get_music_file_crc32dvd_plus_rw',
  get_music_file_crc32dvd_plus_rw_sync: 'app:get_music_file_crc32dvd_plus_rw_sync',
  get_music_file_crc32dvd_plus_r_dl: 'app:get_music_file_crc32dvd_plus_r_dl',
  get_music_file_crc32dvd_plus_r_dl_sync: 'app:get_music_file_crc32dvd_plus_r_dl_sync',
  get_music_file_crc32dvd_plus_rw_dl: 'app:get_music_file_crc32dvd_plus_rw_dl',
  get_music_file_crc32dvd_plus_rw_dl_sync: 'app:get_music_file_crc32dvd_plus_rw_dl_sync',
  get_music_file_crc32bd_rom: 'app:get_music_file_crc32bd_rom',
  get_music_file_crc32bd_rom_sync: 'app:get_music_file_crc32bd_rom_sync',
  get_music_file_crc32bd_r: 'app:get_music_file_crc32bd_r',
  get_music_file_crc32bd_r_sync: 'app:get_music_file_crc32bd_r_sync',
  get_music_file_crc32bd_re: 'app:get_music_file_crc32bd_re',
  get_music_file_crc32bd_re_sync: 'app:get_music_file_crc32bd_re_sync',
  get_music_file_crc32bd_r_xl: 'app:get_music_file_crc32bd_r_xl',
  get_music_file_crc32bd_r_xl_sync: 'app:get_music_file_crc32bd_r_xl_sync',
  get_music_file_crc32bd_re_xl: 'app:get_music_file_crc32bd_re_xl',
  get_music_file_crc32bd_re_xl_sync: 'app:get_music_file_crc32bd_re_xl_sync',
  get_music_file_crc32hd_dvd_rom: 'app:get_music_file_crc32hd_dvd_rom',
  get_music_file_crc32hd_dvd_rom_sync: 'app:get_music_file_crc32hd_dvd_rom_sync',
  get_music_file_crc32hd_dvd_r: 'app:get_music_file_crc32hd_dvd_r',
  get_music_file_crc32hd_dvd_r_sync: 'app:get_music_file_crc32hd_dvd_r_sync',
  get_music_file_crc32hd_dvd_rw: 'app:get_music_file_crc32hd_dvd_rw',
  get_music_file_crc32hd_dvd_rw_sync: 'app:get_music_file_crc32hd_dvd_rw_sync',
  get_music_file_crc32hd_dvd_ram: 'app:get_music_file_crc32hd_dvd_ram',
  get_music_file_crc32hd_dvd_ram_sync: 'app:get_music_file_crc32hd_dvd_ram_sync',
  get_music_file_crc32hd_dvd_r_dl: 'app:get_music_file_crc32hd_dvd_r_dl',
  get_music_file_crc32hd_dvd_r_dl_sync: 'app:get_music_file_crc32hd_dvd_r_dl_sync',
  get_music_file_crc32hd_dvd_rw_dl: 'app:get_music_file_crc32hd_dvd_rw_dl',
  get_music_file_crc32hd_dvd_rw_dl_sync: 'app:get_music_file_crc32hd_dvd_rw_dl_sync',
  get_music_file_crc32floppy: 'app:get_music_file_crc32floppy',
  get_music_file_crc32floppy_sync: 'app:get_music_file_crc32floppy_sync',
  get_music_file_crc32zip_drive: 'app:get_music_file_crc32zip_drive',
  get_music_file_crc32zip_drive_sync: 'app:get_music_file_crc32zip_drive_sync',
  get_music_file_crc32jaz_drive: 'app:get_music_file_crc32jaz_drive',
  get_music_file_crc32jaz_drive_sync: 'app:get_music_file_crc32jaz_drive_sync',
  get_music_file_crc32superdisk: 'app:get_music_file_crc32superdisk',
  get_music_file_crc32superdisk_sync: 'app:get_music_file_crc32superdisk_sync',
  get_music_file_crc32ls120: 'app:get_music_file_crc32ls120',
  get_music_file_crc32ls120_sync: 'app:get_music_file_crc32ls120_sync',
  get_music_file_crc32ls240: 'app:get_music_file_crc32ls240',
  get_music_file_crc32ls240_sync: 'app:get_music_file_crc32ls240_sync',
  get_music_file_crc32hiperdrive: 'app:get_music_file_crc32hiperdrive',
  get_music_file_crc32hiperdrive_sync: 'app:get_music_file_crc32hiperdrive_sync',
  get_music_file_crc32microsd: 'app:get_music_file_crc32microsd',
  get_music_file_crc32microsd_sync: 'app:get_music_file_crc32microsd_sync',
  get_music_file_crc32sd: 'app:get_music_file_crc32sd',
  get_music_file_crc32sd_sync: 'app:get_music_file_crc32sd_sync',
  get_music_file_crc32sdhc: 'app:get_music_file_crc32sdhc',
  get_music_file_crc32sdhc_sync: 'app:get_music_file_crc32sdhc_sync',
  get_music_file_crc32sdxc: 'app:get_music_file_crc32sdxc',
  get_music_file_crc32sdxc_sync: 'app:get_music_file_crc32sdxc_sync',
  get_music_file_crc32cf: 'app:get_music_file_crc32cf',
  get_music_file_crc32cf_sync: 'app:get_music_file_crc32cf_sync',
  get_music_file_crc32mmc: 'app:get_music_file_crc32mmc',
  get_music_file_crc32mmc_sync: 'app:get_music_file_crc32mmc_sync',
  get_music_file_crc32ms: 'app:get_music_file_crc32ms',
  get_music_file_crc32ms_sync: 'app:get_music_file_crc32ms_sync',
  get_music_file_crc32xd: 'app:get_music_file_crc32xd',
  get_music_file_crc32xd_sync: 'app:get_music_file_crc32xd_sync',
  get_music_file_crc32sm: 'app:get_music_file_crc32sm',
  get_music_file_crc32sm_sync: 'app:get_music_file_crc32sm_sync',
  get_music_file_crc32usb_flash_drive: 'app:get_music_file_crc32usb_flash_drive',
  get_music_file_crc32usb_flash_drive_sync: 'app:get_music_file_crc32usb_flash_drive_sync',
  get_music_file_crc32ssd: 'app:get_music_file_crc32ssd',
  get_music_file_crc32ssd_sync: 'app:get_music_file_crc32ssd_sync',
  get_music_file_crc32hdd: 'app:get_music_file_crc32hdd',
  get_music_file_crc32hdd_sync: 'app:get_music_file_crc32hdd_sync',
  get_music_file_crc32tape: 'app:get_music_file_crc32tape',
  get_music_file_crc32tape_sync: 'app:get_music_file_crc32tape_sync',
  get_music_file_crc32network: 'app:get_music_file_crc32network',
  get_music_file_crc32network_sync: 'app:get_music_file_crc32network_sync',
  get_music_file_crc32internet: 'app:get_music_file_crc32internet',
  get_music_file_crc32internet_sync: 'app:get_music_file_crc32internet_sync',
  get_music_file_crc32unknown: 'app:get_music_file_crc32unknown',
  get_music_file_crc32unknown_sync: 'app:get_music_file_crc32unknown_sync',
  get_music_file_crc32none: 'app:get_music_file_crc32none',
  get_music_file_crc32none_sync: 'app:get_music_file_crc32none_sync',
  get_music_file_crc32all: 'app:get_music_file_crc32all',
  get_music_file_crc32all_sync: 'app:get_music_file_crc32all_sync',
  get_music_file_crc32default: 'app:get_music_file_crc32default',
  get_music_file_crc32default_sync: 'app:get_music_file_crc32default_sync',
  get_music_file_crc32auto: 'app:get_music_file_crc32auto',
  get_music_file_crc32auto_sync: 'app:get_music_file_crc32auto_sync',
  get_music_file_crc32custom: 'app:get_music_file_crc32custom',
  get_music_file_crc32custom_sync: 'app:get_music_file_crc32custom_sync',
  get_music_file_crc32custom2: 'app:get_music_file_crc32custom2',
  get_music_file_crc32custom2_sync: 'app:get_music_file_crc32custom2_sync',
  get_music_file_crc32custom3: 'app:get_music_file_crc32custom3',
  get_music_file_crc32custom3_sync: 'app:get_music_file_crc32custom3_sync',
  get_music_file_crc32custom4: 'app:get_music_file_crc32custom4',
  get_music_file_crc32custom4_sync: 'app:get_music_file_crc32custom4_sync',
  get_music_file_crc32custom5: 'app:get_music_file_crc32custom5',
  get_music_file_crc32custom5_sync: 'app:get_music_file_crc32custom5_sync',
  get_music_file_crc32custom6: 'app:get_music_file_crc32custom6',
  get_music_file_crc32custom6_sync: 'app:get_music_file_crc32custom6_sync',
  get_music_file_crc32custom7: 'app:get_music_file_crc32custom7',
  get_music_file_crc32custom7_sync: 'app:get_music_file_crc32custom7_sync',
  get_music_file_crc32custom8: 'app:get_music_file_crc32custom8',
  get_music_file_crc32custom8_sync: 'app:get_music_file_crc32custom8_sync',
  get_music_file_crc32custom9: 'app:get_music_file_crc32custom9',
  get_music_file_crc32custom9_sync: 'app:get_music_file_crc32custom9_sync',
  get_music_file_crc32custom10: 'app:get_music_file_crc32custom10',
  get_music_file_crc32custom10_sync: 'app:get_music_file_crc32custom10_sync',
  get_music_file_crc32custom11: 'app:get_music_file_crc32custom11',
  get_music_file_crc32custom11_sync: 'app:get_music_file_crc32custom11_sync',
  get_music_file_crc32custom12: 'app:get_music_file_crc32custom12',
  get_music_file_crc32custom12_sync: 'app:get_music_file_crc32custom12_sync',
  get_music_file_crc32custom13: 'app:get_music_file_crc32custom13',
  get_music_file_crc32custom13_sync: 'app:get_music_file_crc32custom13_sync',
  get_music_file_crc32custom14: 'app:get_music_file_crc32custom14',
  get_music_file_crc32custom14_sync: 'app:get_music_file_crc32custom14_sync',
  get_music_file_crc32custom15: 'app:get_music_file_crc32custom15',
  get_music_file_crc32custom15_sync: 'app:get_music_file_crc32custom15_sync',
  get_music_file_crc32custom16: 'app:get_music_file_crc32custom16',
  get_music_file_crc32custom16_sync: 'app:get_music_file_crc32custom16_sync',
  get_music_file_crc32custom17: 'app:get_music_file_crc32custom17',
  get_music_file_crc32custom17_sync: 'app:get_music_file_crc32custom17_sync',
  get_music_file_crc32custom18: 'app:get_music_file_crc32custom18',
  get_music_file_crc32custom18_sync: 'app:get_music_file_crc32custom18_sync',
  get_music_file_crc32custom19: 'app:get_music_file_crc32custom19',
  get_music_file_crc32custom19_sync: 'app:get_music_file_crc32custom19_sync',
  get_music_file_crc32custom20: 'app:get_music_file_crc32custom20',
  get_music_file_crc32custom20_sync: 'app:get_music_file_crc32custom20_sync',
  get_music_file_crc32custom21: 'app:get_music_file_crc32custom21',
  get_music_file_crc32custom21_sync: 'app:get_music_file_crc32custom21_sync',
  get_music_file_crc32custom22: 'app:get_music_file_crc32custom22',
  get_music_file_crc32custom22_sync: 'app:get_music_file_crc32custom22_sync',
  get_music_file_crc32custom23: 'app:get_music_file_crc32custom23',
  get_music_file_crc32custom23_sync: 'app:get_music_file_crc32custom23_sync',
  get_music_file_crc32custom24: 'app:get_music_file_crc32custom24',
  get_music_file_crc32custom24_sync: 'app:get_music_file_crc32custom24_sync',
  get_music_file_crc32custom25: 'app:get_music_file_crc32custom25',
  get_music_file_crc32custom25_sync: 'app:get_music_file_crc32custom25_sync',
  get_music_file_crc32custom26: 'app:get_music_file_crc32custom26',
  get_music_file_crc32custom26_sync: 'app:get_music_file_crc32custom26_sync',
  get_music_file_crc32custom27: 'app:get_music_file_crc32custom27',
  get_music_file_crc32custom27_sync: 'app:get_music_file_crc32custom27_sync',
  get_music_file_crc32custom28: 'app:get_music_file_crc32custom28',
  get_music_file_crc32custom28_sync: 'app:get_music_file_crc32custom28_sync',
  get_music_file_crc32custom29: 'app:get_music_file_crc32custom29',
  get_music_file_crc32custom29_sync: 'app:get_music_file_crc32custom29_sync',
  get_music_file_crc32custom30: 'app:get_music_file_crc32custom30',
  get_music_file_crc32custom30_sync: 'app:get_music_file_crc32custom30_sync',
  get_music_file_crc32custom31: 'app:get_music_file_crc32custom31',
  get_music_file_crc32custom31_sync: 'app:get_music_file_crc32custom31_sync',
  get_music_file_crc32custom32: 'app:get_music_file_crc32custom32',
  get_music_file_crc32custom32_sync: 'app:get_music_file_crc32custom32_sync',
  get_music_file_crc32custom33: 'app:get_music_file_crc32custom33',
  get_music_file_crc32custom33_sync: 'app:get_music_file_crc32custom33_sync',
  get_music_file_crc32custom34: 'app:get_music_file_crc32custom34',
  get_music_file_crc32custom34_sync: 'app:get_music_file_crc32custom34_sync',
  get_music_file_crc32custom35: 'app:get_music_file_crc32custom35',
  get_music_file_crc32custom35_sync: 'app:get_music_file_crc32custom35_sync',
  get_music_file_crc32custom36: 'app:get_music_file_crc32custom36',
  get_music_file_crc32custom36_sync: 'app:get_music_file_crc32custom36_sync',
  get_music_file_crc32custom37: 'app:get_music_file_crc32custom37',
  get_music_file_crc32custom37_sync: 'app:get_music_file_crc32custom37_sync',
  get_music_file_crc32custom38: 'app:get_music_file_crc32custom38',
  get_music_file_crc32custom38_sync: 'app:get_music_file_crc32custom38_sync',
  get_music_file_crc32custom39: 'app:get_music_file_crc32custom39',
  get_music_file_crc32custom39_sync: 'app:get_music_file_crc32custom39_sync',
  get_music_file_crc32custom40: 'app:get_music_file_crc32custom40',
  get_music_file_crc32custom40_sync: 'app:get_music_file_crc32custom40_sync',
  get_music_file_crc32custom41: 'app:get_music_file_crc32custom41',
  get_music_file_crc32custom41_sync: 'app:get_music_file_crc32custom41_sync',
  get_music_file_crc32custom42: 'app:get_music_file_crc32custom42',
  get_music_file_crc32custom42_sync: 'app:get_music_file_crc32custom42_sync',
  get_music_file_crc32custom43: 'app:get_music_file_crc32custom43',
  get_music_file_crc32custom43_sync: 'app:get_music_file_crc32custom43_sync',
  get_music_file_crc32custom44: 'app:get_music_file_crc32custom44',
  get_music_file_crc32custom44_sync: 'app:get_music_file_crc32custom44_sync',
  get_music_file_crc32custom45: 'app:get_music_file_crc32custom45',
  get_music_file_crc32custom45_sync: 'app:get_music_file_crc32custom45_sync',
  get_music_file_crc32custom46: 'app:get_music_file_crc32custom46',
  get_music_file_crc32custom46_sync: 'app:get_music_file_crc32custom46_sync',
  get_music_file_crc32custom47: 'app:get_music_file_crc32custom47',
  get_music_file_crc32custom47_sync: 'app:get_music_file_crc32custom47_sync',
  get_music_file_crc32custom48: 'app:get_music_file_crc32custom48',
  get_music_file_crc32custom48_sync: 'app:get_music_file_crc32custom48_sync',
  get_music_file_crc32custom49: 'app:get_music_file_crc32custom49',
  get_music_file_crc32custom49_sync: 'app:get_music_file_crc32custom49_sync',
  get_music_file_crc32custom50: 'app:get_music_file_crc32custom50',
  get_music_file_crc32custom50_sync: 'app:get_music_file_crc32custom50_sync',
  get_music_file_crc32custom51: 'app:get_music_file_crc32custom51',
  get_music_file_crc32custom51_sync: 'app:get_music_file_crc32custom51_sync',
  get_music_file_crc32custom52: 'app:get_music_file_crc32custom52',
  get_music_file_crc32custom52_sync: 'app:get_music_file_crc32custom52_sync',
  get_music_file_crc32custom53: 'app:get_music_file_crc32custom53',
  get_music_file_crc32custom53_sync: 'app:get_music_file_crc32custom53_sync',
  get_music_file_crc32custom54: 'app:get_music_file_crc32custom54',
  get_music_file_crc32custom54_sync: 'app:get_music_file_crc32custom54_sync',
  get_music_file_crc32custom55: 'app:get_music_file_crc32custom55',
  get_music_file_crc32custom55_sync: 'app:get_music_file_crc32custom55_sync',
  get_music_file_crc32custom56: 'app:get_music_file_crc32custom56',
  get_music_file_crc32custom56_sync: 'app:get_music_file_crc32custom56_sync',
  get_music_file_crc32custom57: 'app:get_music_file_crc32custom57',
  get_music_file_crc32custom57_sync: 'app:get_music_file_crc32custom57_sync',
  get_music_file_crc32custom58: 'app:get_music_file_crc32custom58',
  get_music_file_crc32custom58_sync: 'app:get_music_file_crc32custom58_sync',
  get_music_file_crc32custom59: 'app:get_music_file_crc32custom59',
  get_music_file_crc32custom59_sync: 'app:get_music_file_crc32custom59_sync',
  get_music_file_crc32custom60: 'app:get_music_file_crc32custom60',
  get_music_file_crc32custom60_sync: 'app:get_music_file_crc32custom60_sync',
  get_music_file_crc32custom61: 'app:get_music_file_crc32custom61',
  get_music_file_crc32custom61_sync: 'app:get_music_file_crc32custom61_sync',
  get_music_file_crc32custom62: 'app:get_music_file_crc32custom62',
  get_music_file_crc32custom62_sync: 'app:get_music_file_crc32custom62_sync',
  get_music_file_crc32custom63: 'app:get_music_file_crc32custom63',
  get_music_file_crc32custom63_sync: 'app:get_music_file_crc32custom63_sync',
  get_music_file_crc32custom64: 'app:get_music_file_crc32custom64',
  get_music_file_crc32custom64_sync: 'app:get_music_file_crc32custom64_sync',
  get_music_file_crc32custom65: 'app:get_music_file_crc32custom65',
  get_music_file_crc32custom65_sync: 'app:get_music_file_crc32custom65_sync',
  get_music_file_crc32custom66: 'app:get_music_file_crc32custom66',
  get_music_file_crc32custom66_sync: 'app:get_music_file_crc32custom66_sync',
  get_music_file_crc32custom67: 'app:get_music_file_crc32custom67',
  get_music_file_crc32custom67_sync: 'app:get_music_file_crc32custom67_sync',
  get_music_file_crc32custom68: 'app:get_music_file_crc32custom68',
  get_music_file_crc32custom68_sync: 'app:get_music_file_crc32custom68_sync',
  get_music_file_crc32custom69: 'app:get_music_file_crc32custom69',
  get_music_file_crc32custom69_sync: 'app:get_music_file_crc32custom69_sync',
  get_music_file_crc32custom70: 'app:get_music_file_crc32custom70',
  get_music_file_crc32custom70_sync: 'app:get_music_file_crc32custom70_sync',
  get_music_file_crc32custom71: 'app:get_music_file_crc32custom71',
  get_music_file_crc32custom71_sync: 'app:get_music_file_crc32custom71_sync',
  get_music_file_crc32custom72: 'app:get_music_file_crc32custom72',
  get_music_file_crc32custom72_sync: 'app:get_music_file_crc32custom72_sync',
  get_music_file_crc32custom73: 'app:get_music_file_crc32custom73',
  get_music_file_crc32custom73_sync: 'app:get_music_file_crc32custom73_sync',
  get_music_file_crc32custom74: 'app:get_music_file_crc32custom74',
  get_music_file_crc32custom74_sync: 'app:get_music_file_crc32custom74_sync',
  get_music_file_crc32custom75: 'app:get_music_file_crc32custom75',
  get_music_file_crc32custom75_sync: 'app:get_music_file_crc32custom75_sync',
  get_music_file_crc32custom76: 'app:get_music_file_crc32custom76',
  get_music_file_crc32custom76_sync: 'app:get_music_file_crc32custom76_sync',
  get_music_file_crc32custom77: 'app:get_music_file_crc32custom77',
  get_music_file_crc32custom77_sync: 'app:get_music_file_crc32custom77_sync',
  get_music_file_crc32custom78: 'app:get_music_file_crc32custom78',
  get_music_file_crc32custom78_sync: 'app:get_music_file_crc32custom78_sync',
  get_music_file_crc32custom79: 'app:get_music_file_crc32custom79',
  get_music_file_crc32custom79_sync: 'app:get_music_file_crc32custom79_sync',
  get_music_file_crc32custom80: 'app:get_music_file_crc32custom80',
  get_music_file_crc32custom80_sync: 'app:get_music_file_crc32custom80_sync',
  get_music_file_crc32custom81: 'app:get_music_file_crc32custom81',
  get_music_file_crc32custom81_sync: 'app:get_music_file_crc32custom81_sync',
  get_music_file_crc32custom82: 'app:get_music_file_crc32custom82',
  get_music_file_crc32custom82_sync: 'app:get_music_file_crc32custom82_sync',
  get_music_file_crc32custom83: 'app:get_music_file_crc32custom83',
  get_music_file_crc32custom83_sync: 'app:get_music_file_crc32custom83_sync',
  get_music_file_crc32custom84: 'app:get_music_file_crc32custom84',
  get_music_file_crc32custom84_sync: 'app:get_music_file_crc32custom84_sync',
  get_music_file_crc32custom85: 'app:get_music_file_crc32custom85',
  get_music_file_crc32custom85_sync: 'app:get_music_file_crc32custom85_sync',
  get_music_file_crc32custom86: 'app:get_music_file_crc32custom86',
  get_music_file_crc32custom86_sync: 'app:get_music_file_crc32custom86_sync',
  get_music_file_crc32custom87: 'app:get_music_file_crc32custom87',
  get_music_file_crc32custom87_sync: 'app:get_music_file_crc32custom87_sync',
  get_music_file_crc32custom88: 'app:get_music_file_crc32custom88',
  get_music_file_crc32custom88_sync: 'app:get_music_file_crc32custom88_sync',
  get_music_file_crc32custom89: 'app:get_music_file_crc32custom89',
  get_music_file_crc32custom89_sync: 'app:get_music_file_crc32custom89_sync',
  get_music_file_crc32custom90: 'app:get_music_file_crc32custom90',
  get_music_file_crc32custom90_sync: 'app:get_music_file_crc32custom90_sync',
  get_music_file_crc32custom91: 'app:get_music_file_crc32custom91',
  get_music_file_crc32custom91_sync: 'app:get_music_file_crc32custom91_sync',
  get_music_file_crc32custom92: 'app:get_music_file_crc32custom92',
  get_music_file_crc32custom92_sync: 'app:get_music_file_crc32custom92_sync',
  get_music_file_crc32custom93: 'app:get_music_file_crc32custom93',
  get_music_file_crc32custom93_sync: 'app:get_music_file_crc32custom93_sync',
  get_music_file_crc32custom94: 'app:get_music_file_crc32custom94',
  get_music_file_crc32custom94_sync: 'app:get_music_file_crc32custom94_sync',
  get_music_file_crc32custom95: 'app:get_music_file_crc32custom95',
  get_music_file_crc32custom95_sync: 'app:get_music_file_crc32custom95_sync',
  get_music_file_crc32custom96: 'app:get_music_file_crc32custom96',
  get_music_file_crc32custom96_sync: 'app:get_music_file_crc32custom96_sync',
  get_music_file_crc32custom97: 'app:get_music_file_crc32custom97',
  get_music_file_crc32custom97_sync: 'app:get_music_file_crc32custom97_sync',
  get_music_file_crc32custom98: 'app:get_music_file_crc32custom98',
  get_music_file_crc32custom98_sync: 'app:get_music_file_crc32custom98_sync',
  get_music_file_crc32custom99: 'app:get_music_file_crc32custom99',
  get_music_file_crc32custom99_sync: 'app:get_music_file_crc32custom99_sync',
  get_music_file_crc32custom100: 'app:get_music_file_crc32custom100',
  get_music_file_crc32custom100_sync: 'app:get_music_file_crc32custom100_sync',
} as const

export const QUALITY_NAME = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires 無損24-Bit',
  master: '臻品母帶',
} as const

export const QUALITY_NAME_FULL = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires 無損24-Bit',
  atmos: '臻品全景聲',
  atmos_plus: '臻品全景聲 2.0',
  master: '臻品母帶',
} as const

export const FONT_SIZES = [
  {
    name: '80%',
    value: 0.8,
  },
  {
    name: '90%',
    value: 0.9,
  },
  {
    name: '100%',
    value: 1,
  },
  {
    name: '110%',
    value: 1.1,
  },
  {
    name: '120%',
    value: 1.2,
  },
  {
    name: '130%',
    value: 1.3,
  },
] as const

export const DESKTOP_LYRIC_FONTS = [
  '默认',
  '微软雅黑',
  '宋体',
  '黑体',
  '楷体',
  '仿宋',
  '新宋体',
  '华文琥珀',
  '华文隶书',
  '华文新魏',
  '华文行楷',
  '华文彩云',
  '方正舒体',
  '方正姚体',
  '幼圆',
  '隶书',
  'Arial',
  'Verdana',
  'Georgia',
  'Times New Roman',
  'Microsoft YaHei',
  'Impact',
  'Tahoma',
  'Courier New',
  'Calibri',
  'Comic Sans MS',
] as const

export const DESKTOP_LYRIC_TEXT_ALIGNS = ['left', 'center', 'right'] as const

export const DESKTOP_LYRIC_TEXT_Y_ALIGNS = ['top', 'center', 'bottom'] as const

export const DESKTOP_LYRIC_THEMES = ['light', 'dark'] as const

export const DESKTOP_LYRIC_WIDTHS = [
  {
    name: '20%',
    value: 0.2,
  },
  {
    name: '30%',
    value: 0.3,
  },
  {
    name: '40%',
    value: 0.4,
  },
  {
    name: '50%',
    value: 0.5,
  },
  {
    name: '60%',
    value: 0.6,
  },
  {
    name: '70%',
    value: 0.7,
  },
  {
    name: '80%',
    value: 0.8,
  },
  {
    name: '90%',
    value: 0.9,
  },
  {
    name: '100%',
    value: 1,
  },
] as const

export const DESKTOP_LYRIC_MAX_LINE_NUMS = [1, 2, 3, 4, 5] as const

export const DESKTOP_LYRIC_TEXT_OPACITIES = [
  {
    name: '10%',
    value: 0.1,
  },
  {
    name: '20%',
    value: 0.2,
  },
  {
    name: '30%',
    value: 0.3,
  },
  {
    name: '40%',
    value: 0.4,
  },
  {
    name: '50%',
    value: 0.5,
  },
  {
    name: '60%',
    value: 0.6,
  },
  {
    name: '70%',
    value: 0.7,
  },
  {
    name: '80%',
    value: 0.8,
  },
  {
    name: '90%',
    value: 0.9,
  },
  {
    name: '100%',
    value: 1,
  },
] as const

export const DESKTOP_LYRIC_TEXT_SIZES = [
  {
    name: '12px',
    value: 12,
  },
  {
    name: '14px',
    value: 14,
  },
  {
    name: '16px',
    value: 16,
  },
  {
    name: '18px',
    value: 18,
  },
  {
    name: '20px',
    value: 20,
  },
  {
    name: '22px',
    value: 22,
  },
  {
    name: '24px',
    value: 24,
  },
  {
    name: '26px',
    value: 26,
  },
  {
    name: '28px',
    value: 28,
  },
  {
    name: '30px',
    value: 30,
  },
  {
    name: '32px',
    value: 32,
  },
  {
    name: '34px',
    value: 34,
  },
  {
    name: '36px',
    value: 36,
  },
  {
    name: '38px',
    value: 38,
  },
  {
    name: '40px',
    value: 40,
  },
  {
    name: '42px',
    value: 42,
  },
  {
    name: '44px',
    value: 44,
  },
  {
    name: '46px',
    value: 46,
  },
  {
    name: '48px',
    value: 48,
  },
  {
    name: '50px',
    value: 50,
  },
] as const

export const DESKTOP_LYRIC_TEXT_Y_ALIGNS_NAMES = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
} as const

export const DESKTOP_LYRIC_TEXT_X_ALIGNS_NAMES = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const

export const DESKTOP_LYRIC_THEMES_NAMES = {
  light: 'light',
  dark: 'dark',
} as const

export const DESKTOP_LYRIC_MAX_LINE_NUMS_NAMES = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
} as const

export const DESKTOP_LYRIC_TEXT_OPACITIES_NAMES = {
  0.1: '10%',
  0.2: '20%',
  0.3: '30%',
  0.4: '40%',
  0.5: '50%',
  0.6: '60%',
  0.7: '70%',
  0.8: '80%',
  0.9: '90%',
  1: '100%',
} as const

export const DESKTOP_LYRIC_TEXT_SIZES_NAMES = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  26: '26px',
  28: '28px',
  30: '30px',
  32: '32px',
  34: '34px',
  36: '36px',
  38: '38px',
  40: '40px',
  42: '42px',
  44: '44px',
  46: '46px',
  48: '48px',
  50: '50px',
} as const

export const DESKTOP_LYRIC_WIDTHS_NAMES = {
  0.2: '20%',
  0.3: '30%',
  0.4: '40%',
  0.5: '50%',
  0.6: '60%',
  0.7: '70%',
  0.8: '80%',
  0.9: '90%',
  1: '100%',
} as const

export const FONT_SIZE_NAMES = {
  0.8: '80%',
  0.9: '90%',
  1: '100%',
  1.1: '110%',
  1.2: '120%',
  1.3: '130%',
} as const

export const PLAY_QUALITY_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires 無損24-Bit',
  master: '臻品母帶',
} as const

export const PLAY_QUALITY_LOWER_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  master: 'master',
} as const

export const PLAY_QUALITY_HIGHER_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALIAS = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  master: 'master',
} as const

export const PLAY_QUALITY_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  master: 5,
} as const

export const PLAY_QUALITY_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'master',
} as const

export const PLAY_QUALITY_ALL = ['128k', '320k', 'flac', 'hires', 'master'] as const

export const PLAY_QUALITY_ALL_LOWER = ['128k', '320k', 'flac', 'hires', 'master'] as const

export const PLAY_QUALITY_ALL_HIGHER = ['128K', '320K', 'FLAC', 'Hires', 'Master'] as const

export const PLAY_QUALITY_ALL_ALIAS = ['128k', '320k', 'flac', 'hires', 'master'] as const

export const PLAY_QUALITY_ALL_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  master: 5,
} as const

export const PLAY_QUALITY_ALL_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'master',
} as const

export const PLAY_QUALITY_ALL_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires 無損24-Bit',
  master: '臻品母帶',
} as const

export const PLAY_QUALITY_ALL_LOWER_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_HIGHER_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_ALIAS_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_PRIORITY_NAMES = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  master: 5,
} as const

export const PLAY_QUALITY_ALL_REVERSE_PRIORITY_NAMES = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires 無損24-Bit',
  atmos: '臻品全景聲',
  atmos_plus: '臻品全景聲 2.0',
  master: '臻品母帶',
} as const

export const PLAY_QUALITY_ALL_FULL_LOWER_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_HIGHER_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_ALIAS_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_PRIORITY_NAMES = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_REVERSE_PRIORITY_NAMES = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_LOWER = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_HIGHER = ['128K', '320K', 'FLAC', 'Hires', 'Atmos', 'Atmos 2.0', 'Master'] as const

export const PLAY_QUALITY_ALL_FULL_ALIAS = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_LOWER = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_HIGHER = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_LOWER = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_HIGHER = ['128K', '320K', 'FLAC', 'Hires', 'Atmos', 'Atmos 2.0', 'Master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_ALIAS = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_LOWER_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_HIGHER_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_ALIAS_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_PRIORITY_NAMES = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_REVERSE_PRIORITY_NAMES = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_LOWER = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_HIGHER = ['128K', '320K', 'FLAC', 'Hires', 'Atmos', 'Atmos 2.0', 'Master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_ALIAS = ['128k', '320k', 'flac', 'hires', 'atmos', 'atmos_plus', 'master'] as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_PRIORITY = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_REVERSE_PRIORITY = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_LOWER_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_HIGHER_NAMES = {
  '128k': '128K',
  '320k': '320K',
  flac: 'FLAC',
  hires: 'Hires',
  atmos: 'Atmos',
  atmos_plus: 'Atmos 2.0',
  master: 'Master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_ALIAS_NAMES = {
  '128k': '128k',
  '320k': '320k',
  flac: 'flac',
  hires: 'hires',
  atmos: 'atmos',
  atmos_plus: 'atmos_plus',
  master: 'master',
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_PRIORITY_NAMES = {
  '128k': 1,
  '320k': 2,
  flac: 3,
  hires: 4,
  atmos: 5,
  atmos_plus: 6,
  master: 7,
} as const

export const PLAY_QUALITY_ALL_FULL_NAMES_ALIAS_ALL_FULL_REVERSE_PRIORITY_NAMES = {
  1: '128k',
  2: '320k',
  3: 'flac',
  4: 'hires',
  5: 'atmos',
  6: 'atmos_plus',
  7: 'master',
} as const

export const NAV_SHEAR_TYPES = {
  progress: 'progress',
  copylink: 'copylink',
  copytext: 'copytext',
} as const

export const storageDataPrefix = 'ikun_music_'

export const LXM_FILE_EXT_RXP = /\.lxm$/i
export const LXM_FILE_EXT = '.lxm'
