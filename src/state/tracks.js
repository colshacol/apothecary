import * as React from 'react'
import { useList } from 'react-use'

import { createContextualStore } from './createContextualStore'
import { getRandomColorName } from '../utilities/getRandomColor'

import { DEFAULT_TRACKS } from '../consts/index'
import nanoid from 'nanoid'

const createTrack = (options) => {
  return {
    trackName: `track title`,
    trackColor: getRandomColorName() || 'green4',
    isTrackMuted: false,
    isTrackSolo: false,
    trackAudioClips: [],
    trackType: 'midi',
    ...options,
  }
}

const useTracksState = () => {
  const [list, listMethods] = useList(DEFAULT_TRACKS)

  const addTrack = React.useCallback(
    (options) => {
      const newTrack = createTrack(options, list)
      listMethods.push(newTrack)
    },
    [list, listMethods],
  )

  const addAudioTrack = React.useCallback(() => {
    const newTrack = createTrack({ trackType: 'audio' }, list)
    listMethods.push(newTrack)
  }, [list, listMethods])

  const addRecordingTrack = React.useCallback(() => {
    const newTrack = createTrack({ trackType: 'recording' }, list)
    listMethods.push(newTrack)
  }, [list, listMethods])

  const addMidiTrack = React.useCallback(() => {
    const newTrack = createTrack({ trackType: 'midi' }, list)
    listMethods.push(newTrack)
  }, [list, listMethods])

  const addTextTrack = React.useCallback(() => {
    const newTrack = createTrack({ trackType: 'text' }, list)
    listMethods.push(newTrack)
  }, [list, listMethods])

  const addPluginTrack = React.useCallback(() => {
    const newTrack = createTrack({ trackType: 'plugin' }, list)
    listMethods.push(newTrack)
  }, [list, listMethods])

  const removeTrack = React.useCallback(
    (index) => {
      listMethods.remove(index)
    },
    [listMethods],
  )

  const muteTrack = React.useCallback(
    (index) => {
      const track = list[index]
      const isTrackMuted = !track.isTrackMuted

      listMethods.updateAt(index, {
        ...track,
        isTrackMuted,
      })
    },
    [list, listMethods],
  )

  const soloTrack = React.useCallback(
    (index) => {
      const track = list[index]
      const isTrackSolo = !track.isTrackSolo
      const isTrackMuted = isTrackSolo ? false : track.isTrackMuted

      listMethods.updateAt(index, {
        ...track,
        isTrackMuted,
        isTrackSolo,
      })
    },
    [list, listMethods],
  )

  const updateTrack = React.useCallback(
    (index, options) => {
      const track = list[index]

      listMethods.updateAt(index, {
        ...track,
        ...options,
      })
    },
    [list, listMethods],
  )

  const changeTrackPlugin = React.useCallback(
    (index, trackPluginName) => {
      const track = list[index]

      listMethods.updateAt(index, {
        ...track,
        trackPluginName,
      })
    },
    [list, listMethods],
  )

  const addAudioClipToTrack = React.useCallback(
    (index, file) => {
      const track = list[index]
      console.log({ track })

      listMethods.updateAt(index, {
        ...track,
        trackAudioClips: [...track.trackAudioClips, { ...file, id: nanoid() }],
      })
    },
    [list, listMethods],
  )

  const updateTrackAudioClip = React.useCallback(
    (index, clipIndex, updates) => {
      const track = list[index]
      const { trackAudioClips } = track

      trackAudioClips[clipIndex] = {
        ...trackAudioClips[clipIndex],
        ...updates,
      }

      listMethods.updateAt(index, {
        ...track,
        trackAudioClips,
      })
    },
    [list, listMethods],
  )

  const updateTrackAudioClipPosition = React.useCallback(
    (index, clipIndex, positionLeft) => {
      const track = list[index]
      const { trackAudioClips } = track
      trackAudioClips[clipIndex].positionLeft = positionLeft

      listMethods.updateAt(index, {
        ...track,
        trackAudioClips,
      })
    },
    [list, listMethods],
  )

  return {
    list,
    addTrack,
    addAudioTrack,
    addRecordingTrack,
    addMidiTrack,
    addTextTrack,
    addPluginTrack,
    removeTrack,
    muteTrack,
    soloTrack,
    updateTrack,
    changeTrackPlugin,
    addAudioClipToTrack,
    updateTrackAudioClip,
    updateTrackAudioClipPosition,
  }
}

const { Context, Provider, useStore } = createContextualStore(useTracksState)

export { Context }
export const TracksProvider = Provider
export const useTracks = useStore
