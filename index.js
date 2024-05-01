// console.log("Node Backend")

require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working


const express = require('express')
const app = express()
// const port = 3000

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Pleae login</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h1>Pleae signup</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})