import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoolAlgorithmsComponent } from './cool-algorithms/cool-algorithms.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'coolalgorithms', component: CoolAlgorithmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
