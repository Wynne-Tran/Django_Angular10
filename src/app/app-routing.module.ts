import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//here
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';


const routes: Routes = [
  //here
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
