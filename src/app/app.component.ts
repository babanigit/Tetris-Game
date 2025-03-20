import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tetris';

  // practice
  ngOnInit() {
    // reverse the string
    function reverseTheString(str: string): string {
      let CharArray = str.split('');
      let left = 0;
      let right = CharArray.length;
      while (left < right) {
        let temp = CharArray[left];
        CharArray[left] = CharArray[right];
        CharArray[right] = temp;
        left++;
        right--;
      }

      return CharArray.join('');
    }
    console.log(reverseTheString('aniket'));

  }
}
