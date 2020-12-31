import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  loginRes = {
    "email":"",
    "password":"",
    "userId":""
  }

  loginForm = {
    "email":"",
    "password":""
  }

  authenticate(loginRes,loginForm)
  {
    this.loginRes = loginRes;
    this.loginForm = loginForm;
    if(this.loginForm.email === this.loginRes.email && 
      this.loginForm.password === this.loginRes.password)
    {
      localStorage.setItem('logged','true')
      return true;
    }
    else
    {
      return false;
    }
  }

  isUserLogged()
  {
    let user = localStorage.getItem('logged');
    return !(user === null)
  }

  logOut()
  {
    localStorage.clear()
  }
}
