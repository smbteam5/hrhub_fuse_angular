import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FamilyPopupComponent } from './family-popup/family-popup.component';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})

export class OnboardingComponent implements OnInit {

  selectedFood: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(){
    this.selectedFood = this.foods[1].value;
  }
  constructor(private dialogRef : MatDialog){}

    openDialog(){
        this.dialogRef.open(FamilyPopupComponent,
          {
            width: '600px',
            backdropClass: 'confirmDialogComponent',
            hasBackdrop: true
          });
    }

}
