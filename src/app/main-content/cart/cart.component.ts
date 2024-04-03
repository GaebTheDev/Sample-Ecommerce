import { Component, inject } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { Product } from '../../models/Product';
import { CartTileComponent } from './cart-tile/cart-tile.component';
import { ProductDetailsCartComponent } from './product-details-cart/product-details-cart.component';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Cart } from '../../models/Cart';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UnderConstructionComponent, CartTileComponent, MatDialogModule, ProductDetailsCartComponent, AsyncPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor() {
    this.store.select('products').subscribe(products => this.products = products);
    this.store.select('cart').subscribe(cart => this.cart = cart);

  }

  private store = inject(Store);
  private toast = inject(NgToastService);
  private dialog = inject(MatDialog);
  cartProducts: Product[] = [];
  cartProductsQuantity: number[] = [];
  total: number = 0;
  selectedProduct: Product = undefined;
  selectedProductQuantity: number = 1;
  products: Product[];
  cart: Cart;

  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cellphoneNumber: new FormControl(undefined, [Validators.required]),
    address: new FormControl('', [Validators.required]),
  })

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
    if (this.cartProducts.length < 1) {
      this.toast.error({ detail: "Checkout failed", summary: "Please add items to your cart", duration: 3000 })

    } else {
      if (this.checkoutForm.valid) {
        this.toast.success({ detail: "Checkout successful", summary: this.cartProducts.length + (this.cartProducts.length == 1 ? " item has been checked out" : " items has been checked out"), duration: 3000 })
        this.openCheckoutDialog();
      }else {
        this.toast.error({ detail: "Checkout failed", summary: "Please enter a valid input for each field", duration: 3000 })
      }

    }
  }

  openCheckoutDialog() {
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      autoFocus: false,
      data: {
        cartProducts: this.cartProducts,
        cartProductsQuantity: this.cartProductsQuantity,
        total: this.total,
        name: this.checkoutForm.get("name").value,
        cellphoneNumber: this.checkoutForm.get("cellphoneNumber").value,
        address: this.checkoutForm.get("address").value
        // cartProducts: [
        //   new Product(2, "Product Title", 100, "men's clothing", "sample description", "assets/images/purple-cart.png"),
        //   new Product(2, "Product Title", 100, "men's clothing", "sample description", "assets/images/purple-cart.png"),
        //   new Product(2, "Product Title", 100, "men's clothing", "sample description", "assets/images/purple-cart.png"),
        // ],
        // cartProductsQuantity: [2,4,7],
        // total: 300,
        // name: "jake",
        // cellphoneNumber: "09145435744",
        // address: "Regala Building Quezon City Osaka"
      },
    })
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
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id == deletedProduct.id) {
        this.cartProductsQuantity.splice(i, i);
      }
    }
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
