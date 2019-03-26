import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResInitiateModule } from './res-initiate/res-initiate.module';
import { InitiateReservationModule } from './initiate-reservation/initiate-reservation.module';
import { SelectVehicleModule } from './select-vehicle/select-vehicle.module';
import { SelectExtrasModule } from './select-extras/select-extras.module';
import { ConfirmReservationModule } from './confirm-reservation/confirm-reservation.module';
import { ReservationShellComponent } from './reservation-shell.component';
import { InitiateReservationComponent } from './initiateReservation/initiate-reservation.component';

@NgModule({
  declarations: [ReservationShellComponent, InitiateReservationComponent],
  imports: [
    CommonModule,
    ResInitiateModule,
    InitiateReservationModule,
    SelectVehicleModule,
    SelectExtrasModule,
    ConfirmReservationModule
  ]
})
export class ReservationModule { }
