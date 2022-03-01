import { Component } from '@angular/core';
import { Location, UpperCasePipe } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App';
  pageName = 'Home';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd
        ? (this.pageName = event.url.slice(1))
        : 'page not found';
    });
  }
}
