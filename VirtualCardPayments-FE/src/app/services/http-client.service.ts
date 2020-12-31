import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationServiceService } from '../services/authentication-service.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private _http: HttpClient, 
    private _authService: AuthenticationServiceService,
    private _router: Router) { }

  cardModel = {
    "cardNumber": "",
    "expiryDate": "",
  }

  RegisterUserCard(userData) {
    this.cardModel.cardNumber = userData.cardNumber;
    this.cardModel.expiryDate = userData.expiryDate;
    return this._http.post<any>("http://localhost:8080/registerCard", this.cardModel, { withCredentials: true });
  } 


  loginUser(userData) {
    return this._http.post<any>("http://localhost:8080/login", userData, { withCredentials: true })
  }


  signUpUser(userData) {
    return this._http.post<any>("http://localhost:8080/signUp", userData, { withCredentials: true })
  }

  getCardsWithUserId() { 
    return this._http.get<any>("http://localhost:8080/getCard", { withCredentials: true })
  }

  getVirtualCard(numb) {
    let url = `http://localhost:8080/getVirtualCard/${numb}`
    return this._http.get<any>(url, { withCredentials: true });
  }

  getBusinessTypes() {
    return this._http.get<any>("http://localhost:8080/getBusinessTypes", { withCredentials: true })
  }

  updatePaymentDetails(details) {
    return this._http.post<any>("http://localhost:8080/updatePaymentDetails", details, { withCredentials: true })
  }

  getAnalyticsWithId() { 
    let url = `http://localhost:8080/getAnalyticsWithId`
    return this._http.get<any>(url, { withCredentials: true });
  }

  logout() { 
    return this._http.get<any>("http://localhost:8080/logout", { withCredentials: true });
  }

}
