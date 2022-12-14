import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;
  title = 'ClaytonWebsite';

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
  }

  GoToMain()
  {
    this.router.navigate(['']);
    this.drawer.toggle();
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
    this.drawer.toggle();
  }
  GoToCoolAlgorithms()
  {
    this.router.navigate(['coolalgorithms']);
    this.drawer.toggle();
  }
}
