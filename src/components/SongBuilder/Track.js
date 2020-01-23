import * as React from 'react'
import styled from 'styled-components'

import { TrackController } from './TrackController'
import { TrackPlayList } from './TrackPlayList'
import { useToggle, useList } from 'react-use'
import { AudioWaves } from '../AudioWaves'
import { useWaveformLength } from '../../utilities/hooks/useWaveformLength'
import { useTracks } from '../../state/tracks'

const StyledTrack = styled.div`
  width: fit-content;
  height: 100px;
  display: flex;
  background: var(--grayscale2);
  border-bottom: 1px solid var(--grayscale0);
  border-right: 2px solid var(--grayscale12);
  box-shadow: 0px 4px 24px -8px rgba(0, 0, 0, 0.25);
  position: static;

  :last-of-type {
    border-bottom: none;
  }
`

export const Track = (props) => {
  return (
    <StyledTrack data-component="Track">
      {/* <TrackController {...props} /> */}
      {props.track.trackType === 'audio' ? (
        <TrackPlaylistDropzoneWrapper {...props}>
          <TrackPlayList />
        </TrackPlaylistDropzoneWrapper>
      ) : (
        <TrackPlaylistNoDropWrapper>
          <TrackPlayList />
        </TrackPlaylistNoDropWrapper>
      )}
    </StyledTrack>
  )
}

const StyledNoDropPlaylistWrapper = styled.div`
  /* opacity: ${(props) => (props.isDropTarget ? '0.5' : '1')}; */
`

const StyledPlaylistWrapper = styled.div`
  border-style: inset;
  border: ${(props) => (props.isDropTarget ? '1px solid var(--color-info-400)' : 'none')};
  border-right: ${(props) =>
    props.isDropTarget ? '1px solid var(--color-info-400)' : '1px solid var(--grayscale9)'};
`

const audioContext = new AudioContext()

const getAudioBufferWithUrlRequest = (url) => {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    request.onload = () => {
      audioContext.decodeAudioData(request.response, (buffer) => {
        resolve(buffer)
      })
    }

    request.send()
  })
}

export const TrackPlaylistNoDropWrapper = (props) => {
  const [isDropTarget, toggleDropTarget] = useToggle()

  const onDragOver = React.useCallback((ev) => {
    ev.preventDefault()
  }, [])

  const onDragInOrOut = React.useCallback(() => {
    toggleDropTarget()
  }, [toggleDropTarget])

  const onDrop = React.useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()
      toggleDropTarget(false)
    },
    [toggleDropTarget],
  )

  return (
    <StyledNoDropPlaylistWrapper
      isDropTarget={isDropTarget}
      onDragOver={onDragOver}
      onDragEnter={onDragInOrOut}
      onDragLeave={onDragInOrOut}
      onDrop={onDrop}
    >
      {props.children}
    </StyledNoDropPlaylistWrapper>
  )
}

const usePlaylistSelection = () => {
  const [selected, setSelected] = React.useState({})

  const addSelection = React.useCallback(
    (id) => {
      setSelected((former) => {
        return {
          ...former,
          [id]: id,
        }
      })
    },
    [setSelected],
  )

  const removeSelected = React.useCallback(
    (id) => {
      setSelected((former) => {
        delete former[id]
        return former
      })
    },
    [setSelected],
  )

  return {
    selected,
    addSelection,
    removeSelected,
  }
}

export const TrackPlaylistDropzoneWrapper = (props) => {
  const tracks = useTracks()
  const [isDropTarget, toggleDropTarget] = useToggle()

  const onDragOver = React.useCallback((ev) => {
    ev.preventDefault()
  }, [])

  const onDragInOrOut = React.useCallback(() => {
    toggleDropTarget()
  }, [toggleDropTarget])

  const onDrop = React.useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()

      const stepElement = event.nativeEvent.toElement
      const left = stepElement.offsetLeft - 240

      const { items, files } = event.dataTransfer
      const file = files[0]

      if (!file) {
        toggleDropTarget(false)
        return
      }

      const url = URL.createObjectURL(file)

      getAudioBufferWithUrlRequest(url).then((buffer) => {
        const duration = buffer.duration
        toggleDropTarget(false)

        tracks.addAudioClipToTrack(props.trackIndex, {
          file,
          buffer,
          url,
          duration,
          isPlaying: false,
          positionLeft: left,
        })
      })
    },
    [toggleDropTarget, tracks.addAudioClipToTrack],
  )

  return (
    <StyledPlaylistWrapper
      isDropTarget={isDropTarget}
      onDragOver={onDragOver}
      onDragEnter={onDragInOrOut}
      onDragLeave={onDragInOrOut}
      onDrop={onDrop}
    >
      {props.children}
      {props.track.trackAudioClips.length > 0 &&
        props.track.trackAudioClips.map((clip, clipIndex) => (
          <Waveform clipIndex={clipIndex} track={props} tracks={tracks} {...clip} />
        ))}
    </StyledPlaylistWrapper>
  )
}

const StyledWaves = styled.div`
  width: ${(props) => props.width}px;
  height: 90px;
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px;
  z-index: 1;
  border: ${(props) => {
    console.log('should be bordered?', props.isSelected)
    return props.isSelected
      ? ' 2px solid var(--color-primary-transparent-600)'
      : '2px solid transparent'
  }};
`

const StyledWavesWrapper = styled.div`
  position: relative;
  bottom: 98px;
  display: flex;
  flex-wrap: nowrap;

  .react-waves {
    padding: 6px 0;
    background: var(--color-primary-transparent-100);

    .wave > wave,
    .wave > wave canvas {
      height: 90px !important;
    }
  }
`

const StyledWaveformHandle = styled.div`
  height: 100%;
  width: 1px;
  background: #fff;
  border-radius: 2px;
  display: inline-flex;
  z-index: 5;
`

export const Waveform = (props) => {
  const selection = usePlaylistSelection()
  const waveformWidth = useWaveformLength(props.duration)

  React.useEffect(() => {
    console.log('is selected: ', !!selection.selected[props.id])

    if (selection.selected[props.id]) {
      const handler = (event) => {
        console.log('handler... is selected...', !!selection.selected[props.id])
        const target = document.querySelector(`[data-thing-id="${props.id}"]`)
        console.log('clicked on external?', event.target !== target)

        if (event.target !== target) {
          selection.removeSelected(props.id)
        }
      }
      window.addEventListener('click', handler)
      return () => {
        selection.removeSelected(props.id)
        window.removeEventListener('click', handler)
      }
    }

    console.log('removing selection...')
    selection.removeSelected(props.id)
  }, [selection.selected])

  const onDrag = React.useCallback((event) => {
    event.preventDefault()
  }, [])

  const onDragEnd = React.useCallback(
    (event) => {
      event.preventDefault()

      const trackList = document.querySelector('[data-component="TrackList"]')
      const scrollLeft = trackList.scrollLeft

      const stepElement = document.elementFromPoint(
        event.nativeEvent.clientX,
        event.nativeEvent.clientY,
      )

      const left = event.nativeEvent.clientX + scrollLeft - 240
      props.tracks.updateTrackAudioClipPosition(props.track.trackIndex, props.clipIndex, left)
    },
    [props.updateTrackAudioClipPosition],
  )

  console.log('sel', selection, selection.selected[props.id])

  return (
    <StyledWavesWrapper data-thing-id={props.id}>
      <StyledWaves
        isSelected={!!selection.selected[props.id]}
        onClick={() => selection.addSelection(props.id)}
        onDrag={onDrag}
        left={props.positionLeft}
        onDragEnd={onDragEnd}
        width={waveformWidth}
        draggable
      >
        <StyledWaveformHandle />
        <AudioWaves url={props.url} isPlaying={props.isPlaying} />
        <StyledWaveformHandle />
      </StyledWaves>
    </StyledWavesWrapper>
  )
}
