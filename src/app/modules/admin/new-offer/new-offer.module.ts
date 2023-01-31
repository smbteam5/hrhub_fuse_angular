import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from './../../../shared/shared.module';
import { FuseScrollbarModule } from './../../../../@fuse/directives/scrollbar/scrollbar.module';
import { FuseDrawerModule } from './../../../../@fuse/components/drawer/drawer.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SupportTicketRoutingModule } from './../support-ticket/support-ticket-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { NewOfferRoutingModule } from './new-offer-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewOfferRoutingModule,
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
    MatNativeDateModule,
    MatToolbarModule
  ]
})
export class NewOfferModule { }
