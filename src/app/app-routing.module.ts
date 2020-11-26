import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationEditionPageComponent } from './administration-edition-page/administration-edition-page.component';
import { StarterComponent } from './starter/starter.component';
import {DashboardOrangeBrandedComponent} from './dashboard-orange-branded/dashboard-orange-branded.component'
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';


const routes: Routes = [
  { path: 'connexion', component: AdministrationEditionPageComponent },
{path:'starter', component:StarterComponent},
{path:'DashboardOrangeBrandedComponent', component:DashboardOrangeBrandedComponent } ,
{path:'login', component:LoginComponent},
{path:'acceuil', component:AcceuilComponent},
{path:'test', component:TestComponent},
{path:'header', component:HeaderComponent},
{path:'test1', component:Test1Component},
{path:'test3', component:Test3Component}


];

@NgModule({
  declarations: [],
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
