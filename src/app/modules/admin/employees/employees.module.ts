import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class EmployeesModule { }
