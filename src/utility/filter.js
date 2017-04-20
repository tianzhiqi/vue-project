import accounting from 'accounting'

exports.price = value => accounting.formatMoney(value, '¥')
