const express = require('express')
const app = express()
const mw = require('./midleware')

app.use(mw(user=[{firstName: 'Sunil',
lastName:'Jena',
address:'surat',
contact:'7412589632'},
{firstName: 'Kishan',
lastName:'Lad',
address:'surat',
contact:'369856985'}]))

app.listen(5000,()=>{
  console.log('server is listening on port 5000')
})
