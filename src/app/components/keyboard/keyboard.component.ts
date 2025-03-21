import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
  standalone:true,
  imports:[ButtonComponent]
})
export class KeyboardComponent {

}
