import * as React from 'react'
import { createContextualStore } from './createContextualStore'
import { useMap } from '../utilities/hooks/useMap'
import * as dates from '../utilities/dates'

const DEFAULT_PROJECT = {
  projectName: 'Untitled Project',
  projectCreatedDate: dates.getNowTimestamp(),
  projectUpdatedTime: dates.getNowTimestamp(),
}

const useState = (defaultProject = DEFAULT_PROJECT) => {
  const project = useMap(defaultProject)

  const setProjectName = React.useCallback(
    (name) => {
      project.set('projectName', name)
    },
    [project],
  )

  const setProjectUpdatedTime = React.useCallback(() => {
    project.set('projectUpdatedTime', dates.getNowTimestamp())
  }, [project])

  return {
    ...project,
    setProjectName,
    setProjectUpdatedTime,
  }
}

const { Context, Provider, useStore } = createContextualStore(useState)

export { Context }
export const ProjectProvider = Provider
export const useProject = useStore
