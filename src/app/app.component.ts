import { Component } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClaytonWebsite';

  constructor(private router: Router) {}

  GoToFirst()
  {
    this.router.navigate(['first']);
  }
}
