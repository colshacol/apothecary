import dayjs from 'dayjs'

export const getDayjsDate = (date) => {
  return dayjs.isDayjs(date) ? date : dayjs(date)
}

export const getNowTimestamp = () => {
  return dayjs().valueOf()
}

export const getSlashedDate = (date) => {
  const d = getDayjsDate(date)
  return d.format('MM/DD/YYYY')
}

export const getSlashedDateTime = (date) => {
  const d = getDayjsDate(date)
  const slashedDate = d.format('MM/DD/YYYY')
  const timestamp = d.format('h:mma')
  return `${slashedDate} @ ${timestamp}`
}

export const getWrittenDate = (date) => {
  const d = getDayjsDate(date)
  return d.format('dddd MMMM D, YYYY')
}

export const getWrittenDateTime = (date) => {
  const d = getDayjsDate(date)
  const writteDate = d.format('dddd MMMM D, YYYY')
  const writtenTime = d.format('h:mma')
  return `${writteDate} at ${writtenTime}`
}
