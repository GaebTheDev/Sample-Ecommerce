import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter-category',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './filter-category.component.html',
  styleUrl: './filter-category.component.css'
})

export class FilterCategoryComponent {
  categories: string[] = [];
  chosenCategory: string = 'all';

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getCategories().subscribe(response => {
      this.categories.push("all");
      this.categories.push(...response);
    }, (error) => {
      console.error(error);
    })
  };

  // onCategoryChosen(event: any) {
  //   console.log(event.target?.value);
  //   this.chosenCategory = event.target?.value;
  // }

  // code from Procademy Angular Tutorial Playlist video #27
  @Output()
  categoryChanged: EventEmitter<string> = new EventEmitter<string>();

  onCategoryChanged() {
    this.categoryChanged.emit(this.chosenCategory);
  }


}
