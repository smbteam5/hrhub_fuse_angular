import { OnboardingCandidatesComponent } from './onboarding-candidates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:OnboardingCandidatesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingCandidatesRoutingModule { }
