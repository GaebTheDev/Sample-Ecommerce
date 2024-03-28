import { Component } from '@angular/core';
import { SaleSliderComponent } from '../sale-slider/sale-slider.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SaleSliderComponent, ProductListComponent,ProductDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedProduct: Product = undefined;

  onProductSelected(value: Product){
    this.selectedProduct = value;
    console.log(this.selectedProduct);
  }

  onProductDetailBack($event){
    this.selectedProduct = undefined;
  }
}
