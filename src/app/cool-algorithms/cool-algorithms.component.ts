import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cool-algorithms',
  templateUrl: './cool-algorithms.component.html',
  styleUrls: ['./cool-algorithms.component.css']
})
export class CoolAlgorithmsComponent {

  constructor(private router: Router) {
  }

  GoToDikstrasDemo() {
    this.router.navigate(['dikstras']);
  }

  GoToHeapSortDemo() {
    this.router.navigate(['heapsort']);
  }
}
