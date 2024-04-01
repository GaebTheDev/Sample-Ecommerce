import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { removeFromCart } from '../../../shared/store/cart/cart.actions';

@Component({
  selector: 'app-product-details-cart',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './product-details-cart.component.html',
  styleUrl: './product-details-cart.component.css'
})
export class ProductDetailsCartComponent {
  private store = inject(Store);
  faCircleArrowLeft = faCircleArrowLeft;
  faCartPlus = faCartPlus;
  faTrash = faTrash;
  quantity = 1;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  @Input()
  selectedProduct: Product;

  @Output()
  back: EventEmitter<string> = new EventEmitter<string>;

  @Output()
  cartProductDeleted : EventEmitter<Product> = new EventEmitter<Product>;

  onBack() {
    this.selectedProduct = undefined;
    this.back.emit("");
  }

  onQuantityChanged() {
    console.log(this.quantity);
  }

  onRemoveFromCart(){
    this.quantity = 0;
    this.store.dispatch(removeFromCart({productId: this.selectedProduct.id}));
    console.log("Remove from Cart Success!");
    this.cartProductDeleted.emit(this.selectedProduct);
  }

}
