import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiateReservationModule } from './initiate-reservation/initiate-reservation.module';
import { SelectVehicleModule } from './select-vehicle/select-vehicle.module';
import { SelectExtrasModule } from './select-extras/select-extras.module';
import { ConfirmReservationModule } from './confirm-reservation/confirm-reservation.module';
import { ReservationShellComponent } from './reservation-shell.component';

@NgModule({
  declarations: [ReservationShellComponent],
  imports: [
    CommonModule,
    InitiateReservationModule,
    SelectVehicleModule,
    SelectExtrasModule,
    ConfirmReservationModule
  ]
})
export class ReservationModule { }
