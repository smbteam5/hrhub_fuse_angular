import { EmployeePopupComponent } from './../employee-popup/employee-popup.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-onboarding-detail',
  templateUrl: './onboarding-detail.component.html',
  styleUrls: ['./onboarding-detail.component.scss']
})
export class OnboardingDetailComponent implements OnInit {

  constructor(private dialogRef : MatDialog){}

  openDialog(){
      this.dialogRef.open(EmployeePopupComponent,
        {
          width: '600px',
          backdropClass: 'confirmDialogComponent',
          hasBackdrop: true
        });
  }
  
ngOnInit(): void {
}


}
