import { Component } from '@angular/core';
import { Location, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App';
  pageName = 'Home';

  constructor(private location: Location) {
    if (location.path()) {
      this.pageName = location.path().slice(1);
    }
  }
}
