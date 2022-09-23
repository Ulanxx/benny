const b = require('benny')
const path = require('path')

const title = path.basename(__filename)

const obj = {
  adjustPosition: true,
  className: 'ray-input input___i5Kmf',
  confirmHold: false,
  confirmType: 'done',
  cursorSpacing: 0,
  disabled: false,
  focus: false,
  id: undefined,
  maxLength: 140,
  maxlength: 140,
  name: undefined,
  onBlur: undefined,
  onConfirm: 'onConfirm',
  onFocus: undefined,
  onInput: 'onInput(event)',
  password: false,
  placeholder: undefined,
  placeholderStyle: undefined,
  selectionEnd: -1,
  selectionStart: -1,
  style: undefined,
  type: 'text',
  value: undefined,
}

b.suite(
  title,
  b.add('remove-undefined-property-case - 01', () => {
    let props = {}
    for (let key in obj) {
      if (obj[key] !== undefined) {
        props[key] = obj[key]
      }
    }
  }),
  b.add('remove-undefined-property-case - 02', () => {
    const props = Object.keys(obj).reduce((acc, key) => {
      const _acc = acc
      if (obj[key] !== undefined) _acc[key] = obj[key]
      return _acc
    }, {})
  }),
  b.add('remove-undefined-property-case - 03', () => {
    const newObject = JSON.parse(JSON.stringify(obj))
  }),

  b.add('remove-undefined-property-case - 04', () => {
    let props = {}
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined) {
        props[key] = obj[key]
      }
    })
  }),
  b.cycle(),
  b.complete(),
  b.save({ file: title, format: 'chart.html' })
)
