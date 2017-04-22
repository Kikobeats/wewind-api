'use strict'

const parsePrice = require('parse-price')

const {SIZE_TOKEN_SEPARATOR} = require('../constants')

function getPartialPrice (size) {
  const split = size.split(SIZE_TOKEN_SEPARATOR)
  return split.length < 2 ? 0 : Math.trunc(parsePrice(split[1]))
}

function createNormalizePrice (prop) {
  function normalizePrice (item) {
    const price = item[prop]
    if (!price) return

    const {size} = item
    const basePrice = Math.trunc(parsePrice(price))
    const partialPrice = getPartialPrice(size)

    return basePrice + partialPrice
  }

  return normalizePrice
}

module.exports = createNormalizePrice
