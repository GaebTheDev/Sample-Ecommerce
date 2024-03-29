import { Component } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UnderConstructionComponent, LoginFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
