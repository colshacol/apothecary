import nanoid from "nanoid"

export const DEFAULT_TRACKS = [
  {
    id: nanoid(),
    trackName: 'track0',
    trackColor: 'purple0',
    trackType: 'audio',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
  },
  {
    id: nanoid(),
    trackName: 'track1',
    trackColor: 'purple1',
    trackType: 'recording',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
  },
  {
    id: nanoid(),
    trackName: 'track2',
    trackColor: 'purple2',
    trackType: 'midi',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
  },
  {
    id: nanoid(),
    trackName: 'track3',
    trackColor: 'purple3',
    trackType: 'plugin',
    trackPluginName: 'synthus',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
  },
  {
    id: nanoid(),
    trackName: 'track4',
    trackColor: 'blue3',
    trackType: 'text',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
  },
]

export const TRACK_TYPE_ICON_NAME_MAP = {
  audio: 'paperclip',
  recording: 'microphone',
  midi: 'table',
  plugin: 'plug',
  text: 'pen',
}

export const TRACK_TYPE_ICON_COLOR_MAP = {
  audio: 'blue3',
  recording: 'red3',
  midi: 'green3',
  plugin: 'yellow3',
  text: 'white0',
}








