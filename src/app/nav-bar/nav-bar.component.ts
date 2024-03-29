import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, LoginModalComponent, SidebarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faBars = faBars;
  faShop = faShop;
  faHouse = faHouse;
  faShoppingCart = faShoppingCart;
  faCircleQuestion = faCircleQuestion;
  isSidebarOpened : boolean = false;

  onBarsClick(){
    console.log("bars pressed!");
    this.isSidebarOpened = true;
  }

  closeSidebar(){
    this.isSidebarOpened = false; 
  }

}
