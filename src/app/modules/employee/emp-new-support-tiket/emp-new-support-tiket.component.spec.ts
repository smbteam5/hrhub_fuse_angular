import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNewSupportTiketComponent } from './emp-new-support-tiket.component';

describe('EmpNewSupportTiketComponent', () => {
  let component: EmpNewSupportTiketComponent;
  let fixture: ComponentFixture<EmpNewSupportTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpNewSupportTiketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpNewSupportTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
