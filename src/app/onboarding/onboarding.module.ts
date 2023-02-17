import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ThankyouComponent } from './thankyou/thankyou.component';
// import { FamilyPopupComponent } from './family-popup/family-popup.component';


@NgModule({
  declarations: [
    // FamilyPopupComponent
  
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
