if (process.env.NODE_ENV === 'development') {
  console.log('Environment is "development".')
  console.log('Adding dependencies globally.')

  window.randomNumber = require('random-int')
  window.reactDOM = require('react-dom')
  window.react = require('react')
  window.dayjs = require('dayjs')
  window.tone = require('tone')

  window.utilities = {}
  window.utilities.dates = require('./utilities/dates')
  window.utilities.getRandomColor = require('./utilities/getRandomColor')
}
