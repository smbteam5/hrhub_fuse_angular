import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-popup',
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.scss']
})
export class EmployeePopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmployeePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
