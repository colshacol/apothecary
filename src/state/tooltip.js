import * as React from 'react'
import { createContextualStore } from './createContextualStore'
import { useMap } from '../utilities/hooks/useMap'

const useState = () => {
  // const []
}

const { Context, Provider, useStore } = createContextualStore(useState)
export { Context }
export const ProjectProvider = Provider
export const useProject = useStore
