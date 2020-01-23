import * as React from 'react'

export const useMap = (initialValue = {}) => {
  const [state, setState] = React.useState(initialValue)
  const raw = state

  const get = React.useCallback(
    (key) => {
      return state[key]
    },
    [state],
  )

  const set = React.useCallback((key, value) => {
    setState((oldState) => {
      return { ...oldState, [key]: value }
    })
  }, [])

  const has = React.useCallback(
    (key) => {
      return state.hasOwnProperty(key)
    },
    [state],
  )

  const remove = React.useCallback((key) => {
    setState((oldState) => {
      const newState = oldState.delete(key)
      return newState
    })
  }, [])

  const reset = React.useCallback(() => {
    setState(() => {
      return { ...initialValue }
    })
  }, [])

  const keys = Object.keys(raw)
  const values = Object.values(raw)
  const entries = Object.entries(raw)
  const length = keys.length

  return {
    set,
    get,
    has,
    remove,
    reset,
    length,
    entries,
    values,
    keys,
    raw,
  }
}
