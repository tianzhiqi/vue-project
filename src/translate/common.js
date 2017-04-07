const PRODUCT_ZH = require('./product/zh.json')
const PRODUCT_EN = require('./product/en.json')

module.exports = {
  zh: {
    home: {
      buyTicket: '购票',
      activity: '活动',
      shop: '商店',
    },
    product: PRODUCT_ZH,
  },
  en: {
    home: {
      buyTicket: 'BUY',
      activity: 'ACT',
      shop: 'SHOP',
    },
    product: PRODUCT_EN,
  },
}
