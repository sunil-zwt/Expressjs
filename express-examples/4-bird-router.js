const express = require('express')
const app = express()
const birds = require('./bird')

app.use('/bird',birds)

 app.listen(5000,()=>{
    console.log('server is listening on port 5000')
  })