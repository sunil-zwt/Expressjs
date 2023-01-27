const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  const {method,url}=req
  console.log('method:',method,'url',url)
  next()
}
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
app.use([myLogger,requestTime])

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(5000)