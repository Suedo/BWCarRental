import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor() { }

  canLoad(route: Route): boolean {

    return false;

  }
}
