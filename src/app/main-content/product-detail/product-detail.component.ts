import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { addToCart } from '../../shared/store/cart/cart.actions';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private toast = inject(NgToastService);
  private store = inject(Store);
  faCircleArrowLeft = faCircleArrowLeft;
  faCartPlus = faCartPlus;
  faPlus = faPlus;
  faMinus = faMinus;
  quantity = 1;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  @Input()
  selectedProduct: Product;

  @Output()
  back: EventEmitter<string> = new EventEmitter<string>;

  onBack() {
    this.selectedProduct = undefined;
    this.back.emit("");
  }

  onQuantityChanged() {
    // console.log(this.quantity);
  }

  onAddToCart() {
    if (this.quantity < 1) {
      this.toast.error({ detail: "Invalid quantity",summary: "quantity must be equal or more than one", duration: 3000 });
    } else {
      this.store.dispatch(addToCart({ productId: this.selectedProduct.id, quantity: this.quantity }));
      this.toast.success({ detail: "Added to cart successfully",summary: this.selectedProduct.title + " has been added",duration: 3000 });
      this.back.emit("");
    }


    
  }

}
