'use strict'

const reduce = require('lodash.reduce')
const normalize = require('./normalize')

function getItem (rawItem, rawSize) {
  const item = Object.assign({size: rawSize}, rawItem)
  const normalizedItem = normalize(item)
  const {price, image, link, name, size} = normalizedItem
  if (!price) return

  const title = `${name} ${size} €${price}`

  return {
    title,
    price,
    name,
    image,
    link,
    size
  }
}

function getItems (collection) {
  function addItem (acc, item, sizes) {
    sizes.forEach(size => acc.push(getItem(item, size)))
  }

  const items = reduce(collection, function (acc, item) {
    const sizes = item.sizes
    if (sizes) addItem(acc, item, sizes)
    return acc
  }, [])

  return items
}
module.exports = getItems
module.exports.getItems = getItems
module.exports.getItem = getItem
