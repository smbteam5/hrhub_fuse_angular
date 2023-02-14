import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSupportTiketDetailComponent } from './emp-support-tiket-detail.component';

describe('EmpSupportTiketDetailComponent', () => {
  let component: EmpSupportTiketDetailComponent;
  let fixture: ComponentFixture<EmpSupportTiketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSupportTiketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSupportTiketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
