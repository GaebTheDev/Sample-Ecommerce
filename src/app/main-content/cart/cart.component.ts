import { Component } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [UnderConstructionComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
