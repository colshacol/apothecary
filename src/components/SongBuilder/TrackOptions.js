import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'
import { COLOR_MAP } from '../../consts'
import { useToggle } from 'react-use'
import nanoid from 'nanoid'
import { Spacer } from '../Spacer'
import { PopupMenu } from '../PopupMenu'
import { usePopup } from '../../state/popup'
import { useTracks } from '../../state/tracks'
import { tracksStore } from '../../stores/tracksStore'

const StyledMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  width: 51px;
  border-radius: 4px 4px 0 0;
  background: var(--color-primary-transparent-600);
  backdrop-filter: blur(6px);
  color: ${(props) => (props.dark ? '#fff' : '#fff')};
  /* box-shadow: 0px 2px 16px -6px rgba(0, 0, 0, 0.5); */
  /* border: 1px solid var(--grayscale3); */
`

const StyledCloseIcon = styled(Icon)`
  cursor: pointer;
  margin-top: 3px;
  margin-right: 10px;
  color: #fff;
`

const StyledMenuIcon = styled(Icon)`
  color: var(--grayscale21);
  margin-right: 12px;
`

export const TrackOptions = (props) => {
  const popups = usePopup()

  return (
    <PopupMenu>
      <PopupMenu.Trigger>
        <Icon name="ellipsis-h" style={{ marginLeft: 'auto' }} />
      </PopupMenu.Trigger>
      <PopupMenu.Popup>
        <Menu x={-38} y={-9}>
          <StyledMenuHeader>
            <StyledCloseIcon name="times" size="20px" onClick={popups.closePopup} />
          </StyledMenuHeader>
          <MenuOptions>
            <span
              onClick={() => {
                tracksStore.updateTrack(props.trackIndex, { trackType: 'recording' })
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="microphone" />
              <p>Replace with recording track.</p>
            </span>
            <span
              onClick={() => {
                tracksStore.updateTrack(props.trackIndex, { trackType: 'audio' })
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="paperclip" />
              <p>Replace with audio track.</p>
            </span>
            <span
              onClick={() => {
                tracksStore.updateTrack(props.trackIndex, { trackType: 'midi' })
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="table" />
              <p>Replace with midi track.</p>
            </span>
            <span
              onClick={() => {
                tracksStore.updateTrack(props.trackIndex, { trackType: 'plugin' })
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="plug" />
              <p>Replace with plugin track.</p>
            </span>
            <span
              onClick={() => {
                tracksStore.updateTrack(props.trackIndex, { trackType: 'text' })
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="pen" />
              <p>Replace with text track.</p>
            </span>
            <span
              onClick={() => {
                tracksStore.removeTrack(props.track)
                popups.closePopup()
              }}
            >
              <StyledMenuIcon name="trash-alt" />
              <p>Remove track.</p>
            </span>
          </MenuOptions>
        </Menu>
      </PopupMenu.Popup>
    </PopupMenu>
  )
}

const MenuOptions = styled.div`
  /* width: 320px; */
  border-radius: 0px 4px 4px;

  background: ${(props) => (props.dark ? 'var(--grayscale1)' : 'rgba(0,0,0, 0.6)')};
  backdrop-filter: blur(6px);
  color: ${(props) => (props.dark ? '#fff' : '#fff')};
  /* box-shadow: 0px 2px 16px -6px rgba(0, 0, 0, 0.5); */
  /* border: 1px solid var(--grayscale3); */

  span {
    padding: 8px 20px 8px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* border-bottom: 1px solid rgba(100, 100, 100, 0.25); */

    :hover {
      background: var(--color-primary-transparent-200);
    }

    :first-of-type {
      padding-top: 10px;
    }

    :last-of-type {
      padding-bottom: 9px;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.3rem !important;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
  }
`

const Menu = styled.div`
  position: absolute;
`
