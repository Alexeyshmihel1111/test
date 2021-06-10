class Product {
    title;
    price;
    description;
    images;


    constructor(title, price, description, images) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.images = images;
    }
}

module.exports = Product
