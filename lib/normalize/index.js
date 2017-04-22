'use strict'

const reduce = require('lodash.reduce')
const url = require('url')

const createNormalizePrice = require('./create-normalize-price')
const cleanWords = require('../clean-words')
const {SIZE_TOKEN_SEPARATOR, URL} = require('../constants')

const transform = {
  price: createNormalizePrice('price'),
  name: item => cleanWords(item.name),
  link: item => url.resolve(URL, item.link),
  image: item => url.resolve(URL, item.image),
  size: item => {
    const {size: rawSize} = item
    const size = rawSize.split(SIZE_TOKEN_SEPARATOR)[0].trim()
    const sizeNumber = Number(size)
    return isNaN(sizeNumber) ? size : sizeNumber
  }
}

function normalize (item, size) {
  const normalizedItem = reduce(transform, function (acc, value, key) {
    const fn = transform[key]
    if (item[key]) acc[key] = fn(item, size)
    return acc
  }, {})
  return Object.assign({}, item, normalizedItem)
}

module.exports = normalize
