const bodyParser = require('body-parser')
const express = require('express')
const ExpressSSE = require('express-sse')

const app = express()
const port = process.env.PORT || '4000'

// Initialize ExpressSSE
const sse = new ExpressSSE()

// Deal with body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Deal with UI
app.use(express.static(__dirname + '/public'))

// Init SSE Stream
app.get('/stream', sse.init)

// Create send message
app.post('/sendmessage', (req, res) => {
  const data = {
    'time': new Date().toUTCString(),
    'message': req.body.message
  }
  sse.send(data)
  res.send('ok')
});

// Create send event
app.post('/sendevent', (req, res) => {
  const data = {
    'time': new Date().toUTCString(),
    'message': req.body.message
  }
  sse.send(data, 'send')
  res.send('ok')
});

// Start Server
app.listen(port, () => {
  console.log(`SSE Server listening on port ${port}!`)
})