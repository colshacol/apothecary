import * as React from 'react'
import { createContextualStore } from './createContextualStore'
import { getElementCoordinates } from '../utilities/getElementCoordinates'

const getActiveElements = (openPopupId) => {
  const activeTrigger = document.querySelector(
    `[data-popup-role="trigger"][data-popup-id="${openPopupId}"]`,
  )

  const activePopup = document.querySelector(
    `[data-popup-role="popup"][data-popup-id="${openPopupId}"]`,
  )

  return [activeTrigger, activePopup]
}

const useState = () => {
  const [openPopupId, setOpenPopupId] = React.useState()
  const openPopupTriggerCoordinates = React.useRef()
  const openPopupTrigger = React.useRef()

  React.useEffect(() => {
    document.querySelector('#rootPopupProvider').style.display = openPopupId ? 'flex' : 'none'
  }, [openPopupId])

  const applyOpenPopupTrigger = React.useCallback((element) => {
    openPopupTriggerCoordinates.current = getElementCoordinates(element)
    openPopupTrigger.current = element
  }, [])

  const setState = React.useCallback(
    (popupId, triggerElement) => {
      applyOpenPopupTrigger(triggerElement)
      setOpenPopupId(popupId)
    },
    [applyOpenPopupTrigger],
  )

  React.useEffect(() => {
    const handler = (event) => {
      const targetRole = event.target.dataset.popupRole
      const targetPopupId = event.target.dataset.popupId
      const targetIsTrigger = targetRole === 'trigger'

      if (!openPopupId && targetIsTrigger) {
        return setState(targetPopupId, event.target)
      }

      const isRootPopupProvider = event.target.id === 'rootPopupProvider'
      const targetHasOpenPopupId = targetPopupId === openPopupId

      if (isRootPopupProvider) return setState(undefined, undefined)

      if (openPopupId) {
        const [activeTrigger] = getActiveElements(openPopupId)
        const isOutsideClick = event.target.contains(activeTrigger)
        // console.log('isTrigger', targetIsTrigger)
        // console.log('isOutside', isOutsideClick)

        // If click is on trigger for currently open popup, close popup.
        if (targetIsTrigger && targetHasOpenPopupId) {
          return setState(undefined, undefined)
        }

        // If click is on any other trigger, open new popup id.
        if (targetIsTrigger && !targetHasOpenPopupId) {
          return setState(targetPopupId, event.target)
        }

        if (isOutsideClick) {
          return setState(undefined, undefined)
        }
      }
    }

    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [openPopupId, setState])

  const openPopup = React.useCallback((triggerId) => {
    setOpenPopupId(triggerId)
  }, [])

  const closePopup = React.useCallback(() => {
    setOpenPopupId()
  }, [])

  return {
    openPopupId,
    openPopup,
    closePopup,
    openPopupTrigger: openPopupTrigger.current,
    openPopupTriggerCoordinates: openPopupTriggerCoordinates.current,
  }
}

const { Context, Provider, useStore } = createContextualStore(useState)

export { Context }
export const usePopup = useStore

export const PopupProvider = (props) => {
  return (
    <Provider>
      {props.children}
      <div id="rootPopupProvider" />
    </Provider>
  )
}
