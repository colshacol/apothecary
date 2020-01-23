import React from 'react'
import { SongBuilder } from './components/SongBuilder'
import styled from 'styled-components'
import './styles.css'
import { ControlBar } from './components/ControlBar'

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const App = () => {
  return (
    <StyledApp data-component="App">
      <ControlBar title="Apothecary" />
      <SongBuilder />
    </StyledApp>
  )
}
