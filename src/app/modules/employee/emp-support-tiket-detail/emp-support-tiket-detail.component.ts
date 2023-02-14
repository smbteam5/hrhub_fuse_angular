import { RequestPermissionPopupComponent } from './../../admin/request-permission-popup/request-permission-popup.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-emp-support-tiket-detail',
  templateUrl: './emp-support-tiket-detail.component.html',
  styleUrls: ['./emp-support-tiket-detail.component.scss']
})
export class EmpSupportTiketDetailComponent implements OnInit {

  
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
