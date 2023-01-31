import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<ReviewPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectedFood: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Manager'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(){
    this.selectedFood = this.foods[1].value;
  }
}
