import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dikstras-demo',
  templateUrl: './dikstras-demo.component.html',
  styleUrls: ['./dikstras-demo.component.css']
})
export class DikstrasDemoComponent {
  gridPainterScript: HTMLScriptElement;
  dikstrasScript: HTMLScriptElement;
  mainScript: HTMLScriptElement;

  constructor(private router: Router) {
    this.gridPainterScript = document.createElement("script");
    this.gridPainterScript.src = "../../assets/scripts/GridPainter.js";
    this.dikstrasScript = document.createElement("script");
    this.dikstrasScript.src = "../../assets/scripts/Dikstras.js";
    this.mainScript = document.createElement("script");
    this.mainScript.src = "../../assets/scripts/main.js";
    document.body.appendChild(this.gridPainterScript);
    document.body.appendChild(this.dikstrasScript);
    document.body.appendChild(this.mainScript);
  }

  GoToMain()
  {
    this.router.navigate(['']);
  }
}
