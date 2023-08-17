import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './pages/main/main.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'main', component: MainComponent },
  {path: 'contact', component: ContactComponent},
  { path: 'samples', component: SamplesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
