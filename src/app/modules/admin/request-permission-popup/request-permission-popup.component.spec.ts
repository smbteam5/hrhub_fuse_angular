import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPermissionPopupComponent } from './request-permission-popup.component';

describe('RequestPermissionPopupComponent', () => {
  let component: RequestPermissionPopupComponent;
  let fixture: ComponentFixture<RequestPermissionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPermissionPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPermissionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
