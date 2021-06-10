const express = require('express')
const mysql = require('mysql2');
const app = express()
const port = 3000
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'store'
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products',(req, res) => {

connection.promise() .query("SELECT * FROM `products`")
.then((rows,)=>{
    products = products.shift();
    products.forEach(p => {p.images = JSON.parse(p.images)});
    res.json (products);
})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})