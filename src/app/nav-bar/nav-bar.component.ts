import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Cart } from '../models/Cart';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, LoginModalComponent, SidebarComponent, AsyncPipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(){
    this.cart$ = this.store.select('cart');
  }
  
  private store = inject(Store);
  faBars = faBars;
  faShop = faShop;
  faHouse = faHouse;
  faShoppingCart = faShoppingCart;
  faCircleQuestion = faCircleQuestion;
  isSidebarOpened : boolean = false;
  cart$ : Observable<Cart>;

  onBarsClick(){
    console.log("bars pressed!");
    this.isSidebarOpened = true;
  }

  closeSidebar(){
    this.isSidebarOpened = false; 
  }

}
