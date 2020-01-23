import * as React from 'react'
import styled, { css } from 'styled-components'

const redColors = css`
  color: ${(props) => (props.isActive ? 'var(--color-danger-300)' : 'var(--grayscale21)')};
  border: 1px solid
    ${(props) => (props.isActive ? 'var(--color-danger-500)' : 'var(--grayscale1)')};
  background: ${(props) =>
    props.isActive ? 'var(--color-danger-transparent-100)' : 'var(--grayscale3)'};
`

const greenColors = css`
  color: ${(props) => (props.isActive ? 'var(--color-success-300)' : 'var(--grayscale21)')};
  border: 1px solid
    ${(props) => (props.isActive ? 'var(--color-success-500)' : 'var(--grayscale1)')};
  background: ${(props) =>
    props.isActive ? 'var(--color-success-transparent-100)' : 'var(--grayscale3)'};
`

export const ToggleLetterButton = styled.button`
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;

  ${(props) => {
    return props.color === 'red' ? redColors : greenColors
  }}

  :focus {
    outline: none;
  }
`
