import * as React from 'react'
import styled from 'styled-components'

import { useBars } from '../../state/bars'
import { Iterate } from '../Iterate'

// REACT
// COMPONENTS
// ----------

export const TimeBar = (props) => {
  const bars = useBars()
  const barWidth = '240px'

  return (
    <StyledContainer data-component="TimeBar">
      <Iterate target={bars.count}>
        {(bar, barIndex) => (
          <StyledBar key={`${bar}-${barIndex}`} width={barWidth}>
            <StyledBarNumber>{barIndex + 1}</StyledBarNumber>
            {barIndex !== 0 && <StyledFractionMarker height="50%" position="0%" />}
            <StyledFractionMarker height="20%" position="25%" />
            <StyledFractionMarker height="40%" position="50%" />
            <StyledFractionMarker height="20%" position="75%" />
          </StyledBar>
        )}
      </Iterate>
    </StyledContainer>
  )
}

// STYLED
// COMPONENTS
// ----------

const StyledContainer = styled.div`
  width: fit-content;
  height: 40px;
  min-height: 40px;
  display: flex;
  background: var(--grayscale3);
  border-bottom: 1px solid var(--grayscale0);
  border-right: 2px solid var(--grayscale12);
  position: sticky;
  top: 0;
`

const StyledBar = styled.div`
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  display: flex;
  align-items: flex-end;
  position: relative;
`

const StyledFractionMarker = styled.div`
  height: ${(props) => props.height};
  left: calc(${(props) => props.position} - 1px);
  position: relative;
  width: 1px;
  bottom: 0;
  background: var(--grayscale9);
`

const StyledBarNumber = styled.p`
  user-select: none;
  color: var(--grayscale15);
  position: absolute;
  left: 11px;
  bottom: 4px;
`
