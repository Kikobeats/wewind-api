'use strict'

const should = require('should')
const {getItem, getItems} = require('../lib/mapper')
const fixtures = require('./fixtures.json')

describe('wewind-api » mapper', function () {
  describe('.getItem', function () {
    it('get item from the base size', function () {
      const fixture = fixtures[0]
      const size = fixture.sizes[0]
      const item = getItem(fixture, size)

      should(item).be.eql({
        'title': 'IRIG ONE 2016 XS €365',
        'name': 'IRIG ONE 2016',
        'link': 'http://we-wind.com/velas-de-windsurf-es-2/irig-one-2016-vela-hinchable.html',
        'image': 'http://we-wind.com/images/thumbnails/2/230/230/iRIG2016-2146961053157987a23a717a.jpg',
        'price': 365,
        size: 'XS'
      })
    })

    it('get item from the padding size', function () {
      const fixture = fixtures[1]
      const size = fixture.sizes[1]
      const item = getItem(fixture, size)

      should(item).be.eql({
        'title': 'NORTHSAILS HERO 2017 3.4 €634',
        'name': 'NORTHSAILS HERO 2017',
        'link': 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        'image': 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        'price': 634,
        'size': 3.4
      })
    })
  })

  describe('.getItems', function () {
    it('iterate a collection', function () {
      const collection = [fixtures[0], fixtures[1]]
      const items = getItems(collection)

      should(items).be.eql([{
        title: 'IRIG ONE 2016 XS €365',
        price: 365,
        name: 'IRIG ONE 2016',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/iRIG2016-2146961053157987a23a717a.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/irig-one-2016-vela-hinchable.html',
        size: 'XS'
      }, {
        title: 'IRIG ONE 2016 S €385',
        price: 385,
        name: 'IRIG ONE 2016',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/iRIG2016-2146961053157987a23a717a.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/irig-one-2016-vela-hinchable.html',
        size: 'S'
      }, {
        title: 'IRIG ONE 2016 L €485',
        price: 485,
        name: 'IRIG ONE 2016',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/iRIG2016-2146961053157987a23a717a.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/irig-one-2016-vela-hinchable.html',
        size: 'L'
      }, {
        title: 'IRIG ONE 2016 M €435',
        price: 435,
        name: 'IRIG ONE 2016',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/iRIG2016-2146961053157987a23a717a.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/irig-one-2016-vela-hinchable.html',
        size: 'M'
      }, {
        title: 'NORTHSAILS HERO 2017 3 €624',
        price: 624,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 3
      }, {
        title: 'NORTHSAILS HERO 2017 3.4 €634',
        price: 634,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 3.4
      }, {
        title: 'NORTHSAILS HERO 2017 3.7 €644',
        price: 644,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 3.7
      }, {
        title: 'NORTHSAILS HERO 2017 4 €654',
        price: 654,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 4
      }, {
        title: 'NORTHSAILS HERO 2017 4.2 €664',
        price: 664,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 4.2
      }, {
        title: 'NORTHSAILS HERO 2017 4.5 €674',
        price: 674,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 4.5
      }, {
        title: 'NORTHSAILS HERO 2017 4.7 €684',
        price: 684,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 4.7
      }, {
        title: 'NORTHSAILS HERO 2017 5 €694',
        price: 694,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 5
      }, {
        title: 'NORTHSAILS HERO 2017 5.3 €704',
        price: 704,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 5.3
      }, {
        title: 'NORTHSAILS HERO 2017 5.6 €714',
        price: 714,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 5.6
      }, {
        title: 'NORTHSAILS HERO 2017 5.8 €724',
        price: 724,
        name: 'NORTHSAILS HERO 2017',
        image: 'http://we-wind.com/images/thumbnails/2/230/230/14700-1200-C11.jpg',
        link: 'http://we-wind.com/velas-de-windsurf-es-2/northsails-hero-2017.html',
        size: 5.8
      }])
    })
  })
})
