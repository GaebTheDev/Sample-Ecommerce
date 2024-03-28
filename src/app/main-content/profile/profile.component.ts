import { Component } from '@angular/core';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UnderConstructionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
