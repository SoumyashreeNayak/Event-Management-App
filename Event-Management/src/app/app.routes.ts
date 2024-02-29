import { Routes } from '@angular/router';
import { LoginComponent } from './compo/login/login.component';
import { HeaderloginComponent } from './compo/headerlogin/headerlogin.component';
import { HomeComponent } from './compo/home/home.component';
import { EmployeeComponent } from './compo/employee/employee.component';
import { AddemployeeComponent } from './compo/addemployee/addemployee.component';
import { ViewEmployeeComponent } from './compo/view-employee/view-employee.component';
import { UpdateComponent } from './compo/update/update.component';

export const routes: Routes = [
      {path:"", component:HeaderloginComponent},
      {path:"login", component:LoginComponent},
      {path:"home", component:HomeComponent},
      {path:"employee", component:EmployeeComponent},
      {path:"addEmployee", component:AddemployeeComponent},
      {path:"employee/:id", component:ViewEmployeeComponent},
      {path:"employeeupdate/:uid", component:UpdateComponent},
      {path:"**", redirectTo:"home"},

];
