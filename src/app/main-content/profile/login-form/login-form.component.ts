import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  // username : string = 'donero';
  // password : string = 'ewedon';
  // isLoggedIn : boolean = false;
  
  // @Input()
  // activeUser : User = undefined;
  
  // @Input()
  // listOfUsers : User[] = [];

  // @Output()
  // userLoggedIn : EventEmitter<User> = new EventEmitter<User>;

  // login(){
  //   for (var user of this.listOfUsers) {
  //     if(user.username.toLowerCase() === this.username){
  //       if(user.password === this.password){
  //         this.isLoggedIn = true;
  //         this.activeUser = user;
  //         this.userLoggedIn.emit(this.activeUser);
  //       }
  //       console.log(user.id + " " + this.isLoggedIn);
  //     }
  //   }
  //   if (this.isLoggedIn === false) {
  //     console.log("Please login a valid account");
  //   }
    
  // }

}
