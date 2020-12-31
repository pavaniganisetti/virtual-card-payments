import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../services/http-client.service';
import { AuthenticationServiceService } from '../services/authentication-service.service'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _httpservice: HttpClientService,
    private _router: Router,
    private _authService: AuthenticationServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void { }

  public alertMessage = "";
  public alertCondition = false;

  closeAlert() { this.alertCondition = false }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.pattern]]
  })

  onSubmit() {
    this._httpservice.loginUser(this.loginForm.value)
      .subscribe((data) => {
        if (this._authService.authenticate(data, this.loginForm.value)) {
          this._router.navigate(['/payments'], { relativeTo: this.route })
        }
      }, (response) => {
        this.alertMessage = response;
        this.alertCondition = true
      })
  }
}
