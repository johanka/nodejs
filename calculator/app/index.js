const express = require('express')
const calculator = require('./calculator');
const app = express()


app.use(express.json())

app.get('/', function (req, res) {
  res.send('POST to get a sum!')
})

app.post('/', function (req, res) {
  var augend = parseInt(req.body.augend)
  var addend = parseInt(req.body.addend)

  var result = {
    sum: calculator.sum(augend, addend)
  }

  res.send(JSON.stringify(result));
})

app.listen(8080, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on 3000`)
})
