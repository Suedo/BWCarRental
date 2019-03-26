import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShellComponent } from './containers/admin-shell/admin-shell.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { FindUserComponent } from './components/find-user/find-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [AdminShellComponent, LocationSelectorComponent, FindUserComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
