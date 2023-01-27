const express = require('express')

const app = express()


app.get('/',(req,res)=>{

    console.log('Server start')
    res.status(200).send('Welcome to our home page')
})

app.get('/about',(req,res)=>{

    console.log('server at about page')
    res.status(200).send('This is our about page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Item not Found</h1>')
})
app.listen(5000,()=>{
    console.log('Server listening the port number 5000')
})


//app.get
//app.post
//app.put
//app.delete
//app.use
//app.all
//app.listen
