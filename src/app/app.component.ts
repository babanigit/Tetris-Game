import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'tetris';

  // practice
  ngOnInit() {
    console.log("hello there, how are you?");
  }

}
