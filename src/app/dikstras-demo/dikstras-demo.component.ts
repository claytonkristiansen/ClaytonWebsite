import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dikstras-demo',
  templateUrl: './dikstras-demo.component.html',
  styleUrls: ['./dikstras-demo.component.css']
})
export class DikstrasDemoComponent {
  mainScript: HTMLScriptElement;

  constructor(private router: Router) {
    this.mainScript = document.createElement("script");
    this.mainScript.src = "../../assets/scripts/main.js";
    document.body.appendChild(this.mainScript);
  }

  GoToMain()
  {
    this.router.navigate(['']);
  }
}
