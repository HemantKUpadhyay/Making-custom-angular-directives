import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  oddNumbers = [1, 3, 5];
  evenNumbers = [2 ,4 ,6]
  onlyOdd = false;
}
