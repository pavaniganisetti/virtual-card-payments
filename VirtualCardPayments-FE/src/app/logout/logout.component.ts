import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../services/http-client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _authService:AuthenticationServiceService,
    private _router:Router,
    private _http:HttpClientService,
    private cookieService:CookieService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this._http.logout() 
        .subscribe((data)=>{
          console.log(data)
          this._router.navigate(['/login'],{relativeTo:this.route});
          this.cookieService.delete('login') 
          this._authService.logOut();
        })
  }
}
