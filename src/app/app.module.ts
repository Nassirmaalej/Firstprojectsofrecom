import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdministrationEditionPageComponent } from './administration-edition-page/administration-edition-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { DatePipe } from '@angular/common';
import { DashboardOrangeBrandedComponent } from './dashboard-orange-branded/dashboard-orange-branded.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { HeaderComponent } from './header/header.component';
import { Test3Component } from './test3/test3.component'

@NgModule({
  declarations: [
    AppComponent,
    AdministrationEditionPageComponent,
    StarterComponent,
    DashboardOrangeBrandedComponent,
    LoginComponent,
    AcceuilComponent,
    TestComponent,
    Test1Component,
    HeaderComponent,
    Test3Component
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
