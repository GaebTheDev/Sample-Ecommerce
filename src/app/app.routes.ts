import { Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { ProductDetailComponent } from './main-content/product-detail/product-detail.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { CartComponent } from './main-content/cart/cart.component';
import { FaqComponent } from './main-content/faq/faq.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'cart', component: CartComponent},
    {'path': 'faq', component: FaqComponent},
];
