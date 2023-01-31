import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

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

