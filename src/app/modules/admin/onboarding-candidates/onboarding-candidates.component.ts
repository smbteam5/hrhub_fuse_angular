import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-onboarding-candidates',
  templateUrl: './onboarding-candidates.component.html',
  styleUrls: ['./onboarding-candidates.component.scss']
})
export class OnboardingCandidatesComponent implements OnInit {

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
