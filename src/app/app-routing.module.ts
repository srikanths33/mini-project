import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { AuthenticationGuard } from './authentication.guard';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children :[
    {path:'home',component:HomeComponent},
    {path:'createemployee',component:CreateemployeeComponent},
    {path:'allemployee',component:AllemployeeComponent},

  ]},
  {path:'**',component:PagenotfoundComponent},



  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
