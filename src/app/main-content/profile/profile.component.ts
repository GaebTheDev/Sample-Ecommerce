import { Component } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UnderConstructionComponent, LoginFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // papalitan later to single user lang
  // if may user na, diretso profile, pag wala sa login muna
  users: User[] = undefined;

  constructor(private userService: UsersService){}

  ngOnInit(){
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    }, error => { console.error(error);});
    
  }

}
