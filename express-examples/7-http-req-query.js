const express = require('express')
const app = express()
const {products} = require('./data')
app.get('/',(req,res)=>{
  res.json(products)
})

app.get('/api/products/:productID/',(req,res)=>{
  // const newProduct =  products.map((product)=>{
  //   const {id,name,image}= product

  //   return {id,name,image}
  // })

  const {productID} = req.params

  console.log(req.params)
  const singleProduct = products.find(product=> product.id === Number(productID))

  if(!singleProduct){

    return res.status(404).send('The product is not exist')
  }

    return res.json(singleProduct)
  
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{

  console.log(req.params)
  res.send('Hello Woo')
})

app.get('/api/v1/query',(req,res)=>{
  // console.log(req.query)

  const {search,limit}= req.query
  let sortedProduct = [...products]

  if(search){
    sortedProduct = sortedProduct.filter(product=> product.name.startsWith(search))

  }
  
  if(limit){
    sortedProduct= sortedProduct.slice(0,Number(limit))
  }

  if(sortedProduct.length<1){
    return res.json({
      sucess:true,data:[]
    })
  }

  res.json(sortedProduct)
})


app.listen(5000,()=>{
  console.log('server is listening the port 5000')

})



