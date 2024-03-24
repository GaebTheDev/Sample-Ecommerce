import { Component } from '@angular/core';
import { SaleSliderComponent } from './sale-slider/sale-slider.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [SaleSliderComponent, ProductListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
