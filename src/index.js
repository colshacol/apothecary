import './setup'
import 'mobx-react-lite/optimizeForReactDom'

import React from 'react'
import ReactDOM from 'react-dom'

import { tracksStore } from './stores/tracksStore'

import { App } from './App'
import { TracksProvider } from './state/tracks'
import { BarsProvider } from './state/bars'
import { BPMProvider } from './state/bpm'
import { ProjectProvider } from './state/project'
import { PopupProvider } from './state/popup'

const StateProviders = (props) => {
  return (
    <PopupProvider>
      <ProjectProvider>
        <BPMProvider>
          <BarsProvider>
            <TracksProvider>
              <App />
            </TracksProvider>
          </BarsProvider>
        </BPMProvider>
      </ProjectProvider>
    </PopupProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<StateProviders />, rootElement)
