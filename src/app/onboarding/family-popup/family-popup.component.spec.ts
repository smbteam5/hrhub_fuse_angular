import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPopupComponent } from './family-popup.component';

describe('FamilyPopupComponent', () => {
  let component: FamilyPopupComponent;
  let fixture: ComponentFixture<FamilyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
