import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-sale-slider',
  standalone: true,
  imports: [],
  templateUrl: './sale-slider.component.html',
  styleUrl: './sale-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SaleSliderComponent {
  imgUrls = [
    "https://static.vecteezy.com/system/resources/previews/006/934/808/non_2x/3d-rendering-concept-of-e-commerce-online-shopping-smartphone-with-gift-boxes-balloons-and-text-sale-floating-on-background-for-commercial-design-grey-and-yellow-theme-3d-render-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/879/375/large_2x/great-discount-and-sale-promotion-concept-gift-boxes-with-sale-word-floating-3d-rendering-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/879/138/non_2x/great-discount-and-sale-promotion-concept-object-collection-with-shopping-cart-sale-word-balloons-and-gift-boxes-3d-rendering-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/008/879/730/non_2x/great-discount-and-sale-promotion-concept-yellow-sale-word-isolated-on-white-background-3d-rendering-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/002/317/244/small/realistic-neon-lamp-with-the-word-sale-in-pink-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/006/241/366/large_2x/sale-promotion-70-percent-off-with-3d-podium-for-product-presentation-free-photo.jpg",
  ];
}
