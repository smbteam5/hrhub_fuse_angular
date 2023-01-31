import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingCandidatesComponent } from './onboarding-candidates.component';

describe('OnboardingCandidatesComponent', () => {
  let component: OnboardingCandidatesComponent;
  let fixture: ComponentFixture<OnboardingCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
