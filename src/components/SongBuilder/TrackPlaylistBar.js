import * as React from 'react'
import styled from 'styled-components'

// CONSTANT
// VALUES
// ----------

const BAR_WIDTH = '240px'

// REACT
// COMPONENTS
// ----------

export const TrackPlaylistBar = (props) => {
  return (
    <StyledContainer key={props.barIndex} width={BAR_WIDTH}>
      <StyledStep data-step-index={0} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={1} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={2} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={3} data-bar-index={props.barIndex} />

      <StyledStep data-step-index={4} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={5} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={6} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={7} data-bar-index={props.barIndex} isAlternate />

      <StyledStep data-step-index={8} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={9} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={10} data-bar-index={props.barIndex} />
      <StyledStep data-step-index={11} data-bar-index={props.barIndex} />

      <StyledStep data-step-index={12} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={13} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={14} data-bar-index={props.barIndex} isAlternate />
      <StyledStep data-step-index={15} data-bar-index={props.barIndex} isAlternate />
    </StyledContainer>
  )
}

// STYLED
// COMPONENTS
// ----------

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  border-radius: ${(props) => (props.isDropTarget ? '4px' : '0px')};
  border: ${(props) => (props.isDropTarget ? '2px solid var(--color-info-400)' : 'none')};
  border-right: ${(props) =>
    props.isDropTarget ? '2px solid var(--color-info-400)' : '1px solid var(--grayscale9)'};
`

const StyledStep = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isAlternate ? 'var(--grayscale2-1)' : 'none')};
`
