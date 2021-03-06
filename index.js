require('dotenv').config()

const server = require('./api/server')

const port = process.env.PORT || 4001
server.listen(port, () => {
    console.log(`\n*** Server is up and running on ${port} ***\n`)
})