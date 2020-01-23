import * as React from 'react'
import styled from 'styled-components'

import { Logo } from './Logo'
import { Spacer } from './Spacer'

const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--grayscale1);
  padding: 0 12px;
`

const LogoAndTitleContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledTitle = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;
`

export const ControlBar = (props) => {
  return (
    <Container>
      <LogoAndTitleContainer>
        <Logo />
        <Spacer size="6px" />
        {/* <StyledTitle>{props.title}</StyledTitle> */}
      </LogoAndTitleContainer>
      {props.children}
    </Container>
  )
}

const Action = styled.p`
  font-size: 13px;
  color: var(--color-primary-300);
`

ControlBar.Action = (props) => {
  return <Action>{props.text}</Action>
}
