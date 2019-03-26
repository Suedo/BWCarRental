import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationShellComponent } from './reservation/reservation-shell.component';
import { InitiateReservationComponent } from './reservation/initiate-reservation/initiate-reservation.component';
import { AuthGuard } from './user/auth-guard.service';
import { SelectVehicleComponent } from './reservation/select-vehicle/select-vehicle.component';
import { SelectExtrasComponent } from './reservation/select-extras/select-extras.component';
import { ConfirmReservationComponent } from './reservation/confirm-reservation/confirm-reservation.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'admin#AdminModule'
  },
  {
    path: 'reservation',
    component: ReservationShellComponent,
    children: [
      { path: 'initiate', component: InitiateReservationComponent },
      { path: 'select', component: SelectVehicleComponent },
      { path: 'extras', component: SelectExtrasComponent },
      { path: 'confirm', component: ConfirmReservationComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
