const b = require('benny')
const path = require('path')

const title = path.basename(__filename)

const camelCase = require('camel-case').camelCase

const dashToCamelCaseCache = {}

const dashToCamelCase = function (str) {
  if (!Object.prototype.hasOwnProperty.call(dashToCamelCaseCache, str)) {
    if (str.indexOf('-') <= 0) {
      dashToCamelCaseCache[str] = str
    } else {
      dashToCamelCaseCache[str] = str.replace(/-[a-z]/g, function (match) {
        return match[1].toUpperCase()
      })
    }
  }
  return dashToCamelCaseCache[str]
}

b.suite(
  title,
  b.add('camel-case', () => {
    camelCase('refresher-default-style')
  }),
  b.add('custom camel-case', () => {
    dashToCamelCase('refresher-default-style')
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: title, format: 'chart.html' })
)
