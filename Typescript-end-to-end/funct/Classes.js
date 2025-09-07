"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price, pid) {
        this.inCart = false;
        this.isOrder = false;
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return `no product in cart`;
        }
    }
}
var product = new Product('Samsung', 10000, 101);
product.addToCart();
console.log(product.buyProduct());
//# sourceMappingURL=Classes.js.map