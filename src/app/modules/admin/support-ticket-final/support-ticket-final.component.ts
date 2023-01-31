import { RequestPermissionPopupComponent } from './../request-permission-popup/request-permission-popup.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-support-ticket-final',
  templateUrl: './support-ticket-final.component.html',
  styleUrls: ['./support-ticket-final.component.scss']
})
export class SupportTicketFinalComponent implements OnInit {

  selectedFood: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Assigned to'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private dialogRef : MatDialog){}

  ngOnInit(){
    this.selectedFood = this.foods[0].value;
  }
  openDialog(){
    this.dialogRef.open(RequestPermissionPopupComponent,
      {
        width: '600px',
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true
      });
}
}
