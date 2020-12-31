import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CardNumberValidator } from '../custom-validators/card-number.validator';
import { AuthenticationServiceService } from '../services/authentication-service.service'
import { HttpClientService } from '../services/http-client.service';
import { CardExpiryDateValidator } from '../custom-validators/card-expiry-date.validator';
declare var $: any;

@Component({
  selector: 'app-card-registration-form',
  templateUrl: './card-registration-form.component.html',
  styleUrls: ['./card-registration-form.component.css']
})

export class CardRegistrationFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _service: HttpClientService,
    private _router: Router,
    public _authService: AuthenticationServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void { }

  public alertMessage = ""
  public alertCondition = false

  closeAlert() { this.alertCondition = false }     // $('#myDiv').fadeOut()

  get cardNumber() { return this.cardRegistrationForm.get('cardNumber'); }
  get cvv() { return this.cardRegistrationForm.get('cvv'); }
  get expiryDate() { return this.cardRegistrationForm.get('expiryDate'); }

  cardRegistrationForm = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.pattern, CardNumberValidator()]],
    cvv: ['', [Validators.required, Validators.pattern]],
    expiryDate: ['', [Validators.required, Validators.pattern]]
  }, { validator: CardExpiryDateValidator })


  onSubmit() {
    this._service.RegisterUserCard(this.cardRegistrationForm.value)
      .subscribe((data) => {
        Swal.fire
          ({
            title: "Card Successfully Registered!",
            icon: "success",
            width: "400px"
          })
        if (!this._authService.isUserLogged()) {
          localStorage.setItem('logged', 'true');
        }
        this._router.navigate(['/payments'], { relativeTo: this.route })
      }, (error) => {
        this.alertMessage = error;
        this.alertCondition = true
      });
  }
}
