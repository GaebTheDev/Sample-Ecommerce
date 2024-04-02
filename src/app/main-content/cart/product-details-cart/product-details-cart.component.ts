import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { removeFromCart, updateCart } from '../../../shared/store/cart/cart.actions';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

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
  faFloppyDisk = faFloppyDisk;
  faTrash = faTrash;
  origQuantity = 1;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.origQuantity = this.quantity;
  }

  @Input()
  selectedProduct: Product;

  @Input()
  quantity = 1;

  @Output()
  back: EventEmitter<string> = new EventEmitter<string>;

  @Output()
  cartProductDeleted : EventEmitter<Product> = new EventEmitter<Product>;

  @Output()
  cartQuantityChanged : EventEmitter<number> = new EventEmitter<number>;

  onBack() {
    this.selectedProduct = undefined;
    this.back.emit("");
  }

  onQuantityChanged() {
    // console.log(this.origQuantity);
    // console.log(this.quantity);
  }

  onSaveChanges(){
    console.log(this.origQuantity);
    console.log(this.quantity);
    if(this.origQuantity != this.quantity){
      this.cartQuantityChanged.emit(this.quantity);
      this.store.dispatch(updateCart({productId: this.selectedProduct.id, quantity: this.quantity}));
      this.back.emit("");
    }
  }

  onRemoveFromCart(){
    this.quantity = 0;
    this.store.dispatch(removeFromCart({productId: this.selectedProduct.id}));
    // console.log("Remove from Cart Success!");
    this.cartProductDeleted.emit(this.selectedProduct);
    this.back.emit("");
  }

}
