import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';


@NgModule({
  declarations: [
    SupportTicketComponent
  ],
  imports: [
    CommonModule,
    SupportTicketRoutingModule
  ]
})
export class SupportTicketModule { }
