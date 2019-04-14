import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { TripsModule } from './trips/trips.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileModule,
    TripsModule
  ]
})
export class UserModule { }
