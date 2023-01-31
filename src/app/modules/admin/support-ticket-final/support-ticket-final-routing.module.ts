import { SupportTicketFinalComponent } from './support-ticket-final.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:SupportTicketFinalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTicketFinalRoutingModule { }
