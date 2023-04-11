const connectTOMongo= require('./db');
const express = require('express')

connectTOMongo();



const app = express()
const port = 3000

app.use(express.json())

//availaible routes

app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
