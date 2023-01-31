import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReviewPopupComponent } from '../review-popup/review-popup.component';
// import { AddReviewPopupComponent } from '../add-review-popup/add-review-popup.component';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private dialogRef : MatDialog){}

    openDialog(){
        this.dialogRef.open(ReviewPopupComponent,
          {
            width: '600px',
            backdropClass: 'confirmDialogComponent',
            hasBackdrop: true
          });
    }
    
  ngOnInit(): void {
  }

}
