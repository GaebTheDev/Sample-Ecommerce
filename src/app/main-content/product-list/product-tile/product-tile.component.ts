import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {
  
  @Input()
  product: Product;

}
