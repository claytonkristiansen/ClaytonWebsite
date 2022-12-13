import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoolAlgorithmsComponent } from './cool-algorithms/cool-algorithms.component';
import { DikstrasDemoComponent } from './dikstras-demo/dikstras-demo.component';
import { HeapSortDemoComponent } from './heap-sort-demo/heap-sort-demo.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'coolalgorithms', component: CoolAlgorithmsComponent },
    { path: 'dikstras', component: DikstrasDemoComponent },
    { path: 'heapsort', component: HeapSortDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
