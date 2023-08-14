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

@NgModule({
  declarations: [AppComponent, CalculatorComponent, HomepageComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
