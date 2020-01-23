import { observable, reaction, toJS, action } from 'mobx'
import nanoid from 'nanoid'
import { DEFAULT_TRACKS } from '../consts/TRACKS'

const DEFAULT_EMPTY_TRACK = {
    trackName: 'untitled track',
    trackColor: 'purple0',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: []
}

class TracksStore {
    tracks = observable.array(DEFAULT_TRACKS)

    addTrack = () => {
        this.tracks.push({
            ...DEFAULT_EMPTY_TRACK,
            id: nanoid()
        })
    }

    removeTrack = action((track) => {
        console.log('removing', track)
        this.tracks.remove(track)
    })
}

export const tracksStore = new TracksStore()

// DEVELOPMENT
// LOGGING
// -------

if (process.env.NODE_ENV === 'development') {
    window.$tracksStore = tracksStore

    // Log when a track is added or removed.
    reaction(() => tracksStore.tracks.length, () => {
        const trackCount = tracksStore.tracks.length
        console.log('trackStore.tracks count changed: ', toJS(tracksStore.tracks))
    })
}