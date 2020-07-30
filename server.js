const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.static(__dirname + '/docs'))
app.listen(port)

console.log(`Running on ${port}`)