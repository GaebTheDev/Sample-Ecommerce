import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsService } from '../../services/products.service';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { Product } from '../../models/Product';
import { Store } from '@ngrx/store';
import { addProducts } from '../../shared/store/cart/product.actions';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductTileComponent, SearchBarComponent, FilterCategoryComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  private store = inject(Store);
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  searchText: string = '';
  selectedProduct : Product;

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;

      //adding products to store
      this.store.dispatch(addProducts({products: response}));
    }, (error) => {
      console.error(error);
    })
    
  }

  onCategoryChanged(value: string) {
    this.selectedCategory = value;
  }

  onSearchTextChanged(value: string) {
    this.searchText = value;
  }

  @Output()
  productSelected : EventEmitter<Product> = new EventEmitter<Product>

  onSelectedProduct(product: Product){
    this.selectedProduct = product;
    this.productSelected.emit(this.selectedProduct);
  }

}
