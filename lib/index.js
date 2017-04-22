'use strict'

const createStream = require('./req-stream')

function createClient (opts) {
  const client = createStream(opts)

  client.sails = {
    new: client.bind(client, {path: 'velas-de-windsurf-es-2'})
  }

  client.boards = {
    new: client.bind(client, {path: 'tablas-de-windsurf'})
  }

  client.booms = {
    new: client.bind(client, {path: 'botavaras-de-windsurf'})
  }

  client.masts = {
    new: client.bind(client, {path: 'mastiles-de-windsurf-es-2'})
  }

  return client
}

module.exports = createClient
