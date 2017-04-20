import accounting from 'accounting'

const price = function(value) {
  return accounting.formatMoney(value,"¥")
}

exports.price = price
