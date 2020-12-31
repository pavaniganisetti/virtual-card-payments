import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveFormDataService {

  constructor() { }

  private number = null;
  private amount = null;
  private businessId = null;
  private previousRoute = null; 
  private logged = null;
  
  setLogged(value) { this.logged = value }
  setAmount(amount) {  this.amount = amount; }
  setNumber(number) {  this.number = number; }
  setBusinessId(value) { this.businessId = value }
  setPreviousRoute(value) {this.previousRoute = value} 

  getLogged() { return this.logged }
  getNumber() { return this.number }
  getAmount() { return this.amount }
  getBusinessId() { return this.businessId }
  getPreviousRoute() { return this.previousRoute}

  setAllValuesNull()
  {
    this.number = null;
    this.amount = null;
    this.businessId = null;
    this.previousRoute = null;
    this.logged = false;
  }
}
