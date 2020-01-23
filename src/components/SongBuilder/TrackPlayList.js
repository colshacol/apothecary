import * as React from 'react'
import styled from 'styled-components'

import { useBars } from '../../state/bars'
import { useBPM } from '../../state/bpm'
import { TrackPlaylistBar } from './TrackPlaylistBar'

const StyledContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  height: 100px;
  border-bottom: 1px solid var(--grayscale1);
`

export const TrackPlayList = (props) => {
  const bars = useBars()
  const bpm = useBPM()

  return (
    <StyledContainer data-component="TrackPlayList">
      {Array(bars.count)
        .fill('')
        .map((bar, barIndex) => (
          <TrackPlaylistBar barIndex={barIndex} key={barIndex} />
        ))}
    </StyledContainer>
  )
}
