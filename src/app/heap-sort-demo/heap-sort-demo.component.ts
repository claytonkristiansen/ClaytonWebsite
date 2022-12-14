import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heap-sort-demo',
  templateUrl: './heap-sort-demo.component.html',
  styleUrls: ['./heap-sort-demo.component.css']
})
export class HeapSortDemoComponent {
  heapSortScript: HTMLScriptElement;
  
  constructor(private router: Router) {
    this.heapSortScript = document.createElement("script");
    this.heapSortScript.src = "../../assets/scripts/heapsort.js";
    document.body.appendChild(this.heapSortScript);
  }
  
}
