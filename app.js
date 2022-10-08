const express = require('express')
const app     = express()
const port    = process.env.PORT || 3000

app.get('/', ( req,res)=> {
    res.sendFile('./home.html',{
        root: __dirname
    })
})

app.get('/product', (req,res)=>{
    res.sendFile('./product.html',{
        root: __dirname
    })
})

app.get('/productlist/:category/:stock', (req,res)=>{
    const {category,stock} = req.params
    res.send({
        item : category,
        stock,
        barang : category,
        stockjaket : stock
    })
})
app.listen(port, ()=> console.log('listening to http://localhost:3000/'))