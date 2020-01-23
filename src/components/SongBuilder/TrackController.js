import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import {
  COLOR_MAP,
  TRACK_TYPE_ICON_NAME_MAP,
  TRACK_TYPE_ICON_COLOR_MAP,
} from '../../consts/index'
import { useToggle } from 'react-use'
import nanoid from 'nanoid'
import { Spacer } from '../Spacer'
import { PopupMenu } from '../PopupMenu'
import { usePopup } from '../../state/popup'
import { TrackOptions } from './TrackOptions'
import { ToggleLetterButton } from '../ToggleLetterButton'

// TrackController is the box that sticks to the left of a track,
// displaying high-level information about the track and providing
// easy access to common tasks associated with a track.

const getBorderBottom = (props) => {
  return props.isLastTrack ? '2px solid var(--grayscale3)' : '2px solid var(--grayscale3)'
}

const StyledTrackController = styled.div`
  width: 240px;
  min-width: 240px;
  height: 100px;
  border-bottom: ${getBorderBottom};
  border-right: 2px solid var(--grayscale12);
  display: flex;
  background: var(--grayscale4);
`

const StyledTrackColorIndicator = styled.div`
  width: 5px;
  height: 96px;
  margin-top: 2px;
  background: ${(props) => COLOR_MAP[props.trackColor]};
  border: 1px solid var(--grayscale0);
`

const StyledTrackControls = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  position: relative;
`

const StyledTrackName = styled.p`
  color: #fff;
`

const StyledFirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledSecondRow = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
`

const StyledTrackTypeIcon = styled(Icon)`
  margin-right: 4px;
`

const TrackTypeIcon = (props) => {
  const iconName = TRACK_TYPE_ICON_NAME_MAP[props.trackType]
  const iconColor = COLOR_MAP[TRACK_TYPE_ICON_COLOR_MAP[props.trackType]]

  return (
    <StyledTrackTypeIcon
      trackType={props.trackType}
      size="16px"
      color={iconColor}
      name={iconName}
    />
  )
}

const TrackName = (props) => {
  return <StyledTrackName trackColor={props.trackColor}>{props.trackName}</StyledTrackName>
}

export const TrackController = (props) => {
  return (
    <StyledTrackController {...{ ...props, ...props.track}} data-component="TrackController">
      <div style={{ width: 240, display: 'flex', position: 'relative', zIndex: 49 }}>
        <StyledTrackColorIndicator
          trackColor={props.trackColor}
          data-component="TrackColorIndicator"
        />
        <StyledTrackControls data-component="TrackControls">
          <StyledFirstRow>
            <TrackTypeIcon {...{ ...props, ...props.track}}  />
            <TrackName {...{ ...props, ...props.track}}  />
            <TrackOptions track={props.track} trackIndex={props.trackIndex} />
          </StyledFirstRow>
          <Spacer size="6px" />
          <StyledSecondRow>
            <ToggleLetterButton
              color="red"
              isActive={props.isTrackMuted}
              onClick={() => props.muteTrack(props.trackIndex)}
            >
              M
            </ToggleLetterButton>
            <Spacer size="4px" />
            <ToggleLetterButton
              color="green"
              isActive={props.isTrackSolo}
              onClick={() => props.soloTrack(props.trackIndex)}
            >
              S
            </ToggleLetterButton>
          </StyledSecondRow>
        </StyledTrackControls>
      </div>
    </StyledTrackController>
  )
}

const StyledTrackType = styled.small`
  margin-left: 12px;
  font-size: 1.2rem;
  color: ${(props) =>
    props.trackType === 'plugin' ? 'var(--color-warning-300)' : 'var(--color-primary-300)'};
`
