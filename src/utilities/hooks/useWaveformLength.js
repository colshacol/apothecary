import * as React from 'react'
import { useBPM } from '../../state/bpm'

const SECONDS_IN_MINUTE = 60
const PIXELS_PER_BEAT = 60

export const useWaveformLength = (duration = 0) => {
  const { bpm } = useBPM()

  const percentageOfMinute = duration / SECONDS_IN_MINUTE
  const pixelsPerOneMinute = bpm * PIXELS_PER_BEAT
  return pixelsPerOneMinute * percentageOfMinute
}
