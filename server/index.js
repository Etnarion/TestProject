const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const corsOptions = {
  origin: '*'
};
  
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello Pepper')
})

app.post('/echo', (req, res) => {
    res.send(req.body.content)
})

app.listen(8080, () => {
  console.log('listening on port 8080...')
})