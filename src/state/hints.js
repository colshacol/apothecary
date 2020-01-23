import * as React from 'react'
import { createContextualStore } from './createContextualStore'
import { useMap } from '../utilities/hooks/useMap'
import { useToggle } from 'react-use'

import { HINTS_MAP } from '../consts'

const useState = (defaultProject) => {
  const [isHintsEnabled, toggleHintsEnabled] = useToggle()
  const hints = useMap(HINTS_MAP)

  return {
    isHintsEnabled,
    toggleHintsEnabled,
    hints,
  }
}

const { Context, Provider, useStore } = createContextualStore(useState)

export { Context }
export const ProjectProvider = Provider
export const useProject = useStore
