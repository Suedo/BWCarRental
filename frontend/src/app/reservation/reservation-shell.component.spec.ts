import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationShellComponent } from './reservation-shell.component';

describe('ReservationShellComponent', () => {
  let component: ReservationShellComponent;
  let fixture: ComponentFixture<ReservationShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
