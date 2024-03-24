import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {

  @Input()
  product: {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
  };

}
