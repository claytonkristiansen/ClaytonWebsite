import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoolAlgorithmsComponent } from './cool-algorithms/cool-algorithms.component';
import { DikstrasDemoComponent } from './dikstras-demo/dikstras-demo.component';
import { HeapSortDemoComponent } from './heap-sort-demo/heap-sort-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PortfolioComponent,
    CoolAlgorithmsComponent,
    DikstrasDemoComponent,
    HeapSortDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
