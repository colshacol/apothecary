import * as React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.i`
  font-size: ${(props) => props.size};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  color: ${(props) => props.color};
`

export const Icon = (props) => {
  return (
    <StyledIcon
      ref={props.elementRef}
      {...props}
      className={`uil uil-${props.name} ${props.className}`}
    />
  )
}

Icon.defaultProps = {
  size: '16px',
  color: 'var(--grayscale21)',
  className: '',
}
