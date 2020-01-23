import * as React from 'react'
import styled from 'styled-components'
import ReactPopup from 'reactjs-popup'
import { useToggle } from 'react-use'

export const Popup = (props) => {
  const [isOpen, toggleOpen] = useToggle()

  return (
    <>
      {props.trigger(toggleOpen)}
      <ReactPopup
        open={isOpen}
        closeOnDocumentClick
        on="click"
        position="right center"
        onClose={() => toggleOpen(false)}
      >
        {props.content()}
      </ReactPopup>
    </>
  )
}
