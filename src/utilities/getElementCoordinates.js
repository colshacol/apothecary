export const getElementCoordinates = (element) => {
  if (!element) return undefined

  const data = element.getClientRects()
  const { width, height, x, y } = data[0]
  const topRight = [x + width, y]
  const bottomRight = [x + width, y + height]
  const topLeft = [x, y]
  const bottomLeft = [x, y + height]

  return {
    topRight,
    bottomRight,
    topLeft,
    bottomLeft,
    width,
    height,
    x,
    y,
  }
}
