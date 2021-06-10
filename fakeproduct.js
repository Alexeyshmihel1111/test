const faker = require('faker');
const Product = require('./Producte');
for (let i=1; i < 100; i++){
    const product = new Product(
        faker.commerce.product(),
        faker.commerce.price(1,1000),
        faker.commerce.productDescription(),
        [
            faker.image.imageUrl(),
            faker.image.imageUrl(),
            faker.image.imageUrl()]
        )
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'store'
});




connection.query(
    'INSERT INTO `products` (`title`, `price`,`images`, `description`) VALUES (?,?,?,?);',
[product.title, product.price, JSON.stringify(product.images),product.description],
function (error){
    if (error) {console.error(error)}
    console.log(`Product add ${i}: &{product.title}`);
}
)
}