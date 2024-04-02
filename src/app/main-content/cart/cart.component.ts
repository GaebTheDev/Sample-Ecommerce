import { Component, inject } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { Product } from '../../models/Product';
import { CartTileComponent } from './cart-tile/cart-tile.component';
import { ProductDetailsCartComponent } from './product-details-cart/product-details-cart.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Cart } from '../../models/Cart';
import { create } from 'domain';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UnderConstructionComponent, CartTileComponent, ProductDetailsCartComponent, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor() {
    this.store.select('products').subscribe(products => this.products = products);
    this.store.select('cart').subscribe(cart => this.cart = cart);
  }

  private store = inject(Store);
  cartProducts: Product[] = [];
  cartProductsQuantity: number[] = [];
  name: string = '';
  cellphoneNumber: number = 0;
  address: string = '';
  total: number = 0;
  selectedProduct: Product = undefined;
  selectedProductQuantity: number = 1;
  products: Product[];
  cart: Cart;

  ngOnInit() {
    this.createCart(this.products, this.cart, this.cartProducts);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.total += this.cartProducts[i].price * this.cartProductsQuantity[i];
    }
  }

  onCheckout() {
    alert("You checked out " + this.cartProducts.length + " items with a total quantity of " + this.cartProductsQuantity.reduce((total, next) => total += next) + ". The total price is " + this.total.toFixed(2));
  }

  onProductSelect(product: Product) {
    this.selectedProduct = product;

    //look for cart item with same id as product
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id == product.id) {
        this.selectedProductQuantity = this.cartProductsQuantity[i];
      }

    }
    // console.log("onProductSelect");
  }

  onProductDetailBack($event) {
    this.selectedProduct = undefined;
    // console.log("onProductDetailBack");
  }

  onDeleteCartProduct(deletedProduct: Product) {
    this.cartProducts = this.cartProducts.filter(product => product != deletedProduct);
    this.calculateTotal();
  }

  onCartQuantityChanged(quantity: number) {
    this.selectedProductQuantity = quantity;
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id == this.selectedProduct.id) {
        this.cartProductsQuantity[i] = quantity;
      }
    }
    this.calculateTotal();
  }


  createCart(allProducts: Product[], cart: Cart, cartProducts: Product[]) {
    for (let i = 0; i < allProducts.length; i++) {
      for (let j = 0; j < cart.products.length; j++) {
        if (allProducts[i].id == cart.products[j].productId) {
          cartProducts.push(allProducts[i]);
          this.cartProductsQuantity.push(cart.products[j].quantity);
        }
      }
    }
  }

}
