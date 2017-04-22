'use strict'

const isAbsoluteUrl = require('is-absolute-url')
const should = require('should')

const createClient = require('..')

describe('wewind-api', function () {
  const client = createClient({
    key: process.env.API_KEY
  })

  const stream = client.booms.new()
  let count = 0
  let buffer = []

  it('fetch data', function (done) {
    stream.on('data', function (item) {
      ++count
      buffer.push(item)
    })

    stream.on('error', done)

    stream.on('end', function () {
      should(count > 1).be.true()

      buffer.forEach(item => {
        describe(`${item.title}`, function () {
          should(item).be.an.Object()

          describe('url', function () {
            ;[
              'link',
              'image'
            ].forEach(function (prop) {
              const value = item[prop]
              const isUrl = isAbsoluteUrl(value)
              it(prop, () => should(isUrl).be.true())
            })
          })

          describe('string', function () {
            it('title', () => should(item.name).be.an.String())
            it('name', () => should(item.name).be.an.String())
          })

          describe('number', function () {
            it('price', () => should(item.price).be.a.Number())
          })

          describe('string or number', function () {
            it('size', () => should(['string', 'number'].includes(typeof item.price)).be.true())
          })
        })
      })
      done()
    })
  })
})
