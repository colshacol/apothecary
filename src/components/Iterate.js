// import * as React from 'react'
import { xTimesMap } from '../utilities/xTimesMap'

export const Iterate = (props) => {
  if (typeof props.target === 'number') {
    return xTimesMap(props.target, props.children)
  }

  if (Array.isArray(props.target)) {
    return props.target.map(props.children)
  }

  if (typeof props.target === 'string') {
    return props.target.split('').map(props.children)
  }

  if (typeof props.target === 'object') {
    return Object.entries(props.target).map(props.children)
  }
}
