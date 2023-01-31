import { RequestPermissionPopupComponent } from './../request-permission-popup/request-permission-popup.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-support-ticket-detail',
  templateUrl: './support-ticket-detail.component.html',
  styleUrls: ['./support-ticket-detail.component.scss']
})
export class SupportTicketDetailComponent implements OnInit {

  selectedFood: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Assigned to'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(){
    this.selectedFood = this.foods[0].value;
  }
  constructor(private dialogRef : MatDialog){}

    openDialog(){
        this.dialogRef.open(RequestPermissionPopupComponent,
          {
            width: '600px',
            backdropClass: 'confirmDialogComponent',
            hasBackdrop: true
          });
    }

}
