import { Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { ProductDetailComponent } from './main-content/product-detail/product-detail.component';
import { DealsComponent } from './main-content/deals/deals.component';
import { WhatsNewComponent } from './main-content/whats-new/whats-new.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { CartComponent } from './main-content/cart/cart.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'deals', component:DealsComponent},
    {'path': 'whats-new', component: WhatsNewComponent},
    {'path': 'profile', component: ProfileComponent},
    {'path': 'cart', component: CartComponent},
];
