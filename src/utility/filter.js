import accounting from 'accounting'
import dateFns from 'date-fns'

const host = 'http://vartcdn.vart.la/'
exports.price = value => accounting.formatMoney(value, '¥')
exports.date = (value, format) => dateFns.format(value, format)
exports.qiniu = (value, style) => {
  let url
  if (!value) {
    return false
  }
  if (value.indexOf('http://') < 0) {
    url = host + value
  }
  if (value.indexOf('#') >= 0) {
    url = value.substr(0, value.indexOf('#'))
  }
  if (style && style.length > 0) {
    url = `${value}?${style}`
  }
  return url
}
