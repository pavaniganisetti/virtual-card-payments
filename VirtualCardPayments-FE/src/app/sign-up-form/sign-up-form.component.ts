import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '../custom-validators/password.validator';
import { HttpClientService } from '../services/http-client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private _httpservice: HttpClientService,
    private _router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public alertMessage = ""
  public alertCondition = false;

  closeAlert() { this.alertCondition = false }  // $('#myDiv').fadeOut()

  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get phoneNumber() { return this.signUpForm.get('phoneNumber'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern]],
    lastName: ['', [Validators.required, Validators.pattern]],
    phoneNumber: ['', [Validators.required, Validators.pattern, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.pattern]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: PasswordValidator });


  onSubmit() {
    this._httpservice.signUpUser(this.signUpForm.value)
      .subscribe(data => {
        console.log(data)
        this._router.navigate(['/registerCard'],{relativeTo:this.route});
      }, (error) => {
        this.alertMessage = error;
        this.alertCondition = true
      });
  }
}
