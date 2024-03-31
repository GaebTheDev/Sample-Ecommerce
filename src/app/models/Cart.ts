export class Cart {
    products:
        [
            {
                productId: number,
                quantity: number,
            }
        ]

    constructor(products) {
        this.products = products;
    }
}