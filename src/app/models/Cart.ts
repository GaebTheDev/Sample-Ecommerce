// export class Product {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
//     description: string;
//     image: string;

//     constructor(id, title, price, category, description, image){
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.category = category;
//         this.description = description;
//         this.image = image;
//     }
// }

export class Cart {
    id: number;
    products: {
        productId: number,
        quantity: number,
    };
}