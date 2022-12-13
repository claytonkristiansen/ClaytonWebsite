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

  GoToMain()
  {
    this.router.navigate(['']);
  }
  
  GoToGitHub()
  {
    window.location.href = "https://github.com/claytonkristiansen";
  }

  GoToLinkedIn()
  {
    window.location.href = "https://linkedin.com/in/claytonkristiansen";
  }

  GoToPortfolio()
  {
    this.router.navigate(['portfolio']);
  }
  GoToCoolAlgorithms()
  {
    this.router.navigate(['coolalgorithms']);
  }
}
