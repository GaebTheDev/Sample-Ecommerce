import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-cart-tile',
  standalone: true,
  imports: [],
  templateUrl: './cart-tile.component.html',
  styleUrl: './cart-tile.component.css'
})
export class CartTileComponent {

  @Input()
  product : Product = undefined;

  @Input()
  quantity : number = 1;

}
