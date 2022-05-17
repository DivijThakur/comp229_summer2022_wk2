const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World express !!!')
})

app.get('/name', (req, res) => {
    res.send('My name is Divij Thakur.')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})