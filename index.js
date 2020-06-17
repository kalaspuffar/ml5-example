var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.use('/images', express.static('images'))
app.use('/', express.static('src'))

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

