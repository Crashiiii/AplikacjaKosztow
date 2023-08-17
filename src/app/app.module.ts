import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './pages/main/main.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, HomepageComponent, MainComponent, SamplesComponent, RegistrationComponent, LoginComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
