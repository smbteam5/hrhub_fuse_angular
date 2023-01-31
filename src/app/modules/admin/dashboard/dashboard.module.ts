import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
