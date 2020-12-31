import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationCanactivateService implements CanActivate {

  constructor(private _router:Router,private _authService:AuthenticationServiceService) { }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
  {
    if (this._authService.isUserLogged())
      return true;
  
    this._router.navigate(['login']);
    return false;
  }
}
