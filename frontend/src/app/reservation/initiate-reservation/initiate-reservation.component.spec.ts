import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateReservationComponent } from './initiate-reservation.component';

describe('InitiateReservationComponent', () => {
  let component: InitiateReservationComponent;
  let fixture: ComponentFixture<InitiateReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
