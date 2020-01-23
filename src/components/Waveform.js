import * as React from 'react'
import Wavesurfer from 'react-wavesurfer3'
import wavesurfer from 'wavesurfer.js'

window.WaveSurfer = wavesurfer

export const Waveform = (props) => {
  return (
    <Wavesurfer
      audioFile={props.audioBuffer || props.url}
      pos={props.position}
      onPosChange={props.onPositionChange}
      playing={props.isPlaying}
      options={{
        audioRate: 1,
        height: 80,
        width: 150,
        waveColor: '#ddd',
        progressColor: '#999',
        cursorColor: '#999',
      }}
    />
  )
}

Waveform.defaultProps = {
  url: undefined,
  position: undefined,
  onPositionChange: undefined,
  isPlaying: undefined,
}
