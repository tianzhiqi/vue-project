import accounting from 'accounting'
import dateFns from 'date-fns'

exports.price = value => accounting.formatMoney(value, '¥')
exports.date = (value, format) => dateFns.format(value, format)
