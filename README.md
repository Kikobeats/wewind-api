# wewind-api

![Last version](https://img.shields.io/github/tag/Kikobeats/wewind-api.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/wewind-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/wewind-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/wewind-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/wewind-api)
[![Dependency status](http://img.shields.io/david/Kikobeats/wewind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/wewind-api)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/wewind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/wewind-api#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/wewind-api.svg?style=flat-square)](https://www.npmjs.org/package/wewind-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic API access for we-wind.com

## Install

```bash
$ npm install wewind-api --save
```

## Usage

```js
const wewind = require('wewind-api')

const stream = wewind({
  key: process.env.API_KEY, // API Key credentials
  itemsPerPage: 10000 // Number of items per page [default=10000]
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
