class Product {
  constructor(
    id,
    name,
    oldPrice,
    newPrice,
    priceOff,
    benefit1,
    benefit2,
    benefit3,
    category,
    image
  ) {
    this.id = id;
    this.name = name;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.priceOff = priceOff;
    this.benefit1 = benefit1;
    this.benefit2 = benefit2;
    this.benefit3 = benefit3;
    this.category = category;
    this.image = image;
  }
}

export default Product;
