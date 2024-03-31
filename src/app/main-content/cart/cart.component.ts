import { Component } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { Product } from '../../models/Product';
import { CartTileComponent } from './cart-tile/cart-tile.component';
import { ProductDetailsCartComponent } from './product-details-cart/product-details-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UnderConstructionComponent, CartTileComponent, ProductDetailsCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products : Product[] = [
    new Product(3, "Mens Cotton Jacket", 55.99, "men's clothing", "great outerwear jackets for Spring/Autumn/Winter, suitable for many", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"),
    new Product(4, "Mens Casual Slim Fit Mens Casual Slim Fit", 15.99, "men's clothing", "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"),
    new Product(3, "Mens Cotton Jacket", 55.99, "men's clothing", "great outerwear jackets for Spring/Autumn/Winter, suitable for many", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"),
    new Product(4, "Mens Casual Slim Fit", 15.99, "men's clothing", "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"),
    new Product(3, "Mens Cotton Jacket", 55.99, "men's clothing", "great outerwear jackets for Spring/Autumn/Winter, suitable for many", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"),
    new Product(4, "Mens", 15.99, "men's clothing", "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"),
  ];
  name : string = '';
  cellphoneNumber : number = 0;
  address : string = '';
  total : number = 0;
  selectedProduct : Product = undefined;

  ngOnInit(){
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].price;
    }
  }

  onCheckout(){
    this.calculateTotal();
    alert("You checked out " + this.products.length + " items. The total price is " + this.total.toFixed(2));
  }

  onProductSelect(product){
    this.selectedProduct = product;
  }

  onProductDetailBack($event){
    this.selectedProduct = undefined;
  }

}
