import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketFinalComponent } from './support-ticket-final.component';

describe('SupportTicketFinalComponent', () => {
  let component: SupportTicketFinalComponent;
  let fixture: ComponentFixture<SupportTicketFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportTicketFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportTicketFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
