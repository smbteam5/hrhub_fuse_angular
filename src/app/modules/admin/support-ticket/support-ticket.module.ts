import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatNativeDateModule} from '@angular/material/core';


import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import {MatSelectModule} from '@angular/material/select';


import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { SharedModule } from 'app/shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    SupportTicketComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    SupportTicketRoutingModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FuseDrawerModule,
    FuseScrollbarModule,
    SharedModule,
    MatDatepickerModule,
    MatMenuModule,
    MatNativeDateModule
  ]
})
export class SupportTicketModule { }

