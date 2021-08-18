import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: ListComponent,
  },

  {
    path: "add",
    component: AddComponent,
  }
];

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeModule { }
