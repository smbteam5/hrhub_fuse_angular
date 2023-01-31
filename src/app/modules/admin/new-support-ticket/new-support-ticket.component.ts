import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-support-ticket',
  templateUrl: './new-support-ticket.component.html',
  styleUrls: ['./new-support-ticket.component.scss']
})
export class NewSupportTicketComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
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
