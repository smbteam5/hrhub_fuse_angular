import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-emp-support-tiket',
  templateUrl: './emp-support-tiket.component.html',
  styleUrls: ['./emp-support-tiket.component.scss']
})
export class EmpSupportTiketComponent implements OnInit {

  selectedFood: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(){
    this.selectedFood = this.foods[1].value;
  }
}
