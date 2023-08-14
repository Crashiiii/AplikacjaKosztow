import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

  