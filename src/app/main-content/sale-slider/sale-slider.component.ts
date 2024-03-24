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
  imgUrls = ["https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01zFkFKb1V3TWR5QaCN_!!6000000002597-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01hUfawS1n7kIZrNk6T_!!6000000005043-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01ifXkjT275irWQKMIh_!!6000000007746-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01kIIQwk1FLJ5ce49rH_!!6000000000470-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01vLoJTI1K6iYARheX9_!!6000000001115-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01QfZV011FN8fsjrCuD_!!6000000000474-0-tps-1976-688.jpg_2200x2200q80.jpg",
  ];
}
