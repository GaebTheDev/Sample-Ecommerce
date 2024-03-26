import { Component } from '@angular/core';
import { SaleSliderComponent } from './sale-slider/sale-slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Product } from '../models/Product';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [SaleSliderComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  selectedProduct: Product = undefined;

  onProductSelected(value: Product){
    this.selectedProduct = value;
    console.log(this.selectedProduct);
  }

  onProductDetailBack($event){
    this.selectedProduct = undefined;
  }

}
