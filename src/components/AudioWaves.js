import * as React from 'react'
import ReactWaves from '@dschoon/react-waves'
import styled from 'styled-components'

const StyledWaves = styled(ReactWaves)`
  margin: 0 !important;
  padding: 0 !important;
`

export const AudioWaves = (props) => {
  return (
    <StyledWaves
      audioFile={props.url}
      className={'react-waves'}
      options={{
        barHeight: 2,
        cursorWidth: 0,
        height: 100,
        hideScrollbar: true,
        progressColor: '#333',
        responsive: true,
        waveColor: '#ead6ff',
      }}
      volume={1}
      zoom={1}
      playing={props.isPlaying}
    />
  )
}
