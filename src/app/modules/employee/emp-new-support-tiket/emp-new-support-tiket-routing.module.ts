import { EmpNewSupportTiketComponent } from './emp-new-support-tiket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:EmpNewSupportTiketComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpNewSupportTiketRoutingModule { }
