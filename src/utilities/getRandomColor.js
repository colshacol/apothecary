import randomNumber from 'random-int'

import { COLOR_MAP } from '../consts/index'

const COLOR_VALUES = Object.values(COLOR_MAP)
const COLOR_NAMES = Object.keys(COLOR_MAP)

export const getRandomColor = () => {
  return COLOR_VALUES[randomNumber(COLOR_VALUES.length)]
}

export const getRandomColorName = () => {
  return COLOR_NAMES[randomNumber(COLOR_NAMES.length)]
}
