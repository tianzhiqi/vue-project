const PRODUCT_ZH = require('./product/zh.json')
const PRODUCT_EN = require('./product/en.json')
const ORDER_ZH = require('./order/zh.json')
const ORDER_EN = require('./order/en.json')
const MEMBER_ZH = require('./member/zh.json')
const MEMBER_EN = require('./member/en.json')

module.exports = {
  zh: {
    home: {
      buyTicket: '购票',
      activity: '活动',
      shop: '商店',
    },
    product: PRODUCT_ZH,
    order: ORDER_ZH,
    member: MEMBER_ZH,
  },
  en: {
    home: {
      buyTicket: 'BUY',
      activity: 'ACT',
      shop: 'SHOP',
    },
    product: PRODUCT_EN,
    order: ORDER_EN,
    member: MEMBER_EN,
  },
}
