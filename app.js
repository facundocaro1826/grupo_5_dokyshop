const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* config */
app.use(express.static('public'));

/* routes */
const createPath = (filename) => path.join(__dirname, `./views/${filename}.html`);

app.get('/', (req, res)=>{
    res.sendFile(createPath('index'))  //home => Florencia
})

app.get('/productDetail', (req, res)=>{
    res.sendFile(createPath('productDetail')) // Gaston 
})

app.get('/productCar', (req, res)=>{
    res.sendFile(createPath('productCar'))  // Sofia
})

app.get('/register', (req, res)=>{
    res.sendFile(createPath('register'))     //Pato
})

app.get('/login', (req, res)=>{
    res.sendFile(createPath('login'))     // Adriana
})

/* server */
app.listen(port, ()=> console.log(`http://localhost:${(port)}`))


