import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  faCircleArrowLeft = faCircleArrowLeft;
  faCartPlus = faCartPlus;

  ngOnInit(){
    window.scrollTo(0,0);
  }
  
  @Input()
  selectedProduct: Product;

  @Output()
  back: EventEmitter<string> = new EventEmitter<string>;

  onBack(){
    this.selectedProduct = undefined;
    this.back.emit("");
  }

  onAddToCart(){
    alert(this.selectedProduct.title);
  }

}
