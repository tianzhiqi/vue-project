import accounting from 'accounting'
import dateFns from 'date-fns'

const price = function(value) {
  return accounting.formatMoney(value,"¥")
}
const date = function(value,format) {
  return dateFns.format(value, format)
}
exports.price = price
exports.date = date
