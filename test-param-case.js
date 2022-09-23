const b = require('benny')
const path = require('path')

const title = path.basename(__filename)

const paramCase = require('param-case').paramCase

const camelToDashCaseCache = {}

const camelToDashCase = function (str) {
  if (!Object.prototype.hasOwnProperty.call(camelToDashCaseCache, str)) {
    camelToDashCaseCache[str] = (
      str.slice(0, 1) + str.slice(1, str.length).replace(/([A-Z])/g, '-$&')
    ).toLowerCase()
  }
  return camelToDashCaseCache[str]
}
b.suite(
  title,
  b.add('camel-case', () => {
    paramCase('refresherDefaultStyle')
  }),
  b.add('custom camel-case', () => {
    camelToDashCase('refresherDefaultStyle')
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: title, format: 'chart.html' })
)
