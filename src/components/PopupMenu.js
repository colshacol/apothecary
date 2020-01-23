import * as React from 'react'
import styled from 'styled-components'
import { COLOR_MAP } from '../consts'
import { useToggle } from 'react-use'
import nanoid from 'nanoid'
import { Spacer } from './Spacer'
import { usePopup } from '../state/popup'
import { Portal } from 'react-portal'
import { getElementCoordinates } from '../utilities/getElementCoordinates'

export const PopupMenu = (props) => {
  const id = React.useRef(nanoid())

  return React.Children.map(props.children, (child) => {
    return { ...child, props: { ...child.props, popupId: id.current } }
  })
}

const Trigger = (props) => {
  return React.Children.map(props.children, (child) => {
    return {
      ...child,
      props: {
        ...child.props,
        'data-popup-role': 'trigger',
        'data-popup-id': props.popupId,
      },
    }
  })
}

const Popup = (props) => {
  const { openPopupId, openPopupTriggerCoordinates } = usePopup()

  if (props.popupId === openPopupId) {
    const children = React.Children.map(props.children, (child) => {
      return {
        ...child,
        props: {
          ...child.props,
          'data-popup-role': 'popup',
          'data-popup-id': props.popupId,
          style: {
            ...(child.props.style || {}),
            // position: 'fixed',
            zIndex: 1000,
            left:
              openPopupTriggerCoordinates.x + openPopupTriggerCoordinates.width + child.props.x,
            top: openPopupTriggerCoordinates.y + child.props.y,
          },
        },
      }
    })

    return <Portal>{children}</Portal>
  }

  return null
}

PopupMenu.Trigger = Trigger
PopupMenu.Popup = Popup
