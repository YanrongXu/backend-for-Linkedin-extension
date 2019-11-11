const express = require('express')
const configureMiddleware = require('./middleware.js')
const forms = require('../forms/forms-routes.js')
const users = require('../user/user-routes.js')


const server = express()
configureMiddleware(server)

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).send('Hello everyone')
})

server.use('/api/users', users)
server.use('/api/forms', forms)

module.exports = server