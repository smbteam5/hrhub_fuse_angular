import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSupportTiketComponent } from './emp-support-tiket.component';

describe('EmpSupportTiketComponent', () => {
  let component: EmpSupportTiketComponent;
  let fixture: ComponentFixture<EmpSupportTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSupportTiketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSupportTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
