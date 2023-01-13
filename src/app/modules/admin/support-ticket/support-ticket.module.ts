import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    SupportTicketComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    SupportTicketRoutingModule
  ]
})
export class SupportTicketModule { }
