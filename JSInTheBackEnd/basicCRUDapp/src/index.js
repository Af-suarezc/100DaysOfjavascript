import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import products from './data.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const productsList = products;
const port = 5080;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

app.use(express.json())

//Create using the post method

app.post('/api/add', (req,res)=>{
    const newProduct ={
        id:productsList.length + 1,
        name:req.body.name,
        price:req.body.price
    }
    productsList.push(newProduct)
    // status 201 if ok! :)
    res.status(201).json(newProduct)
})

//Reading  using the get

app.get('/api/products', (req,res)=>{
    res.json(products)
})

//getting element by id :)

app.get('/api/products/:productID', (req, res)=>{
    const id =Number(req.params.productID);
    const product = productsList.find(products=>products.id ===id)
    if(!product){
        return res.status(404).send('Product Not Found')
    }
    res.json(product)
})


//update PUT

app.put('/api/products/update/:productID', (req,res)=>{
    const id = Number(req.params.productID);
    const index = productsList.findIndex(products=>products.id ===id);
    if(index ===-1){
        return res.status(404).send('Product Not found')
    }
    const updateProduct={
        id:productsList[index].id,
        name: req.body.name,
        price:req.body.price
    }
    products[index] =updateProduct
    res.status(200).json('Product updated')
})

//Delete using delete

app.delete('/api/products/:productID', (req, res)=>{
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if(index===-1){
        return res.status(404).send('Product not found')
    }
    productsList.splice(index,1)
    res.status(200).json('Product deleted')
})