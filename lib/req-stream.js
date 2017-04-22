'use strict'

const from = require('from2').obj
const got = require('got')

const CONST = require('./constants')
const mapper = require('./mapper')

const fetch = (opts) => got.get(CONST.ENDPOINT, opts)

function createStream (opts) {
  const {key: wrapAPIKey} = opts

  function reqStream (query) {
    Object.assign(query, {wrapAPIKey})
    const fetchOpts = {json: true, query}
    let itemsFetched = false
    const hasFetch = () => !itemsFetched

    const stream = from(function (size, next) {
      if (!hasFetch()) return next(null, null)

      fetch(fetchOpts)
        .then(res => {
          const {body} = res
          if (!body.success) return next(body.messages)

          const rawItems = body.data.items || []
          const pageSize = rawItems.length
          if (!rawItems || !pageSize) return next(null, null)

          const items = mapper(rawItems)
          const lastItem = items.pop()
          items.forEach(item => this.push(item))
          itemsFetched = true

          return next(null, lastItem)
        })
        .catch(next)
    })

    return stream
  }

  return reqStream
}

module.exports = createStream
