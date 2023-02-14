import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-emp-new-support-tiket',
  templateUrl: './emp-new-support-tiket.component.html',
  styleUrls: ['./emp-new-support-tiket.component.scss']
})
export class EmpNewSupportTiketComponent implements OnInit {

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
