import * as React from 'react'
import styled from 'styled-components'

import { Icon } from '../../components/Icon'
import { useTracks } from '../../state/tracks'
import { tracksStore } from '../../stores/tracksStore'

// REACT
// COMPONENTS
// ----------

// TracksOptions is the bar that floats above the track controllers. It
// is responsible for adding new tracks.

export const TracksOptions = (props) => {

  return (
    <StyledContainer>
      <PlusIconContainer>
        <Icon name="plus" />
      </PlusIconContainer>
      <StyledActionIcon onClick={tracksStore.addTrack} title="Add Recording Track">
        <Icon name="microphone" />
      </StyledActionIcon>
      <StyledActionIcon onClick={tracksStore.addTrack} title="Add Audio Track">
        <Icon name="paperclip" />
      </StyledActionIcon>
      <StyledActionIcon onClick={tracksStore.addTrack} title="Add MIDI Track">
        <Icon name="table" />
      </StyledActionIcon>
      <StyledActionIcon onClick={tracksStore.addTrack} title="Add Plugin Track">
        <Icon name="plug" />
      </StyledActionIcon>
      <StyledActionIcon onClick={tracksStore.addTrack} title="Add Notes/Lyrics Track">
        <Icon name="pen" />
      </StyledActionIcon>
    </StyledContainer>
  )
}

// STYLED
// COMPONENTS
// ----------

const StyledContainer = styled.div`
  width: 240px;
  min-width: 240px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 50;
  background: var(--grayscale3);
  border-bottom: 1px solid var(--grayscale0);
  border-right: 2px solid var(--grayscale12);
  border-radius: 3px 3px 0 0;
  position: sticky;
  top: 0;
`

const StyledActionIcon = styled.div`
  height: 100%;
  width: 40px;
  min-width: 40px;
  background: var(--grayscale2);
  display: flex;
  justify-content: center;
  padding-top: 2px;
  align-items: center;
  cursor: pointer;

  :hover {
    background: var(--grayscale4);
  }
`

const PlusIconContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  background: var(--grayscale3);
  align-items: center;
`
