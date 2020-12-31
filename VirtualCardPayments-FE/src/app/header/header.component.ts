import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../services/authentication-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _authService:AuthenticationServiceService) { }

  ngOnInit(): void {
  }

}
