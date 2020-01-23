import * as React from 'react'
import styled from 'styled-components'

const SPACE_SUFFIXES = ['between', 'around']
const FLEX_SUFFIXED = ['start', 'end']

const getFlexDirection = (direction) => (props) => {
  return props.reverse ? `${direction}-reverse` : direction
}

const getFixedValue = (value) => {
  if (SPACE_SUFFIXES.includes(value)) return `space-${value}`
  if (FLEX_SUFFIXED.includes(value)) return `flex-${value}`
  return value || 'inherit'
}

const getJustifyContent = (direction) => (props) => {
  return direction === 'row' ? getFixedValue(props.xAlign) : getFixedValue(props.yAlign)
}

const getAlignItems = (direction) => (props) => {
  return direction === 'row' ? getFixedValue(props.yAlign) : getFixedValue(props.xAlign)
}

const getFlexWrap = (props) => {
  return props.flexWrap
}

export const Row = styled.div`
  display: flex;
  flex-direction: ${getFlexDirection('row')};
  justify-content: ${getJustifyContent('row')};
  align-items: ${getAlignItems('row')};
  flex-wrap: ${getFlexWrap};
`

export const Column = styled.div`
  display: flex;
  flex-direction: ${getFlexDirection('column')};
  justify-content: ${getJustifyContent('column')};
  align-items: ${getAlignItems('column')};
  flex-wrap: ${getFlexWrap};
`

export const Flex = {
  Row,
  Column,
}

Row.defaultProps = {
  flexWrap: 'nowrap',
  xAlign: 'flex-start',
  yAlign: 'flex-start',
}

Column.defaultProps = {
  flexWrap: 'nowrap',
  xAlign: 'flex-start',
  yAlign: 'flex-start',
}
