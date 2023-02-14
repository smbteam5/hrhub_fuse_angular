import { EmpSupportTiketDetailComponent } from './emp-support-tiket-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:EmpSupportTiketDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpSupportTiketDetailRoutingModule { }
