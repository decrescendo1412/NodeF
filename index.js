const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sinamon:abcd1234@sinamonfirst.z07ho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! my name is HJ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})