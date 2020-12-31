import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VirtualCardExpiryDateValidator } from 'src/app/custom-validators/virtual-card-expiry-date.validator';
import { HttpClientService } from 'src/app/services/http-client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payments-submission',
  templateUrl: './payments-submission.component.html',
  styleUrls: ['./payments-submission.component.css']
})
export class PaymentsSubmissionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _httpService: HttpClientService,
    private route: ActivatedRoute) { }

  userCards = [];

  ngOnInit(): void {
    //To get available cards of the user
    this._httpService.getCardsWithUserId()
      .subscribe((data) => {
        this.userCards = data
      })

    //Generating a virtual Card depending upon selecting card
    this.cardSubmitForm.get('cardNumber').valueChanges.subscribe((value) => {
      this._httpService.getVirtualCard(value.substring(0, 2))
        .subscribe((data) => {
          this.virtualCardNumber = data;
        });
    });
  }

  public alertMessage = "";
  public alertCondition = false;

  closeAlert() { this.alertCondition = false } // $('#myDiv').fadeOut()

  get expiryDate() { return this.virtualCardForm.get('expiryDate') }

  cardSubmitForm = this.fb.group({
    cardNumber: ['', [Validators.required]]
  });

  virtualCardNumber = "";
  form = JSON.parse(localStorage.getItem('businessMethod')) //extracting amount mentioned in business method
  virtualCardForm = this.fb.group({
    virtualCard: [{ value: this.virtualCardNumber, disabled: true }],
    expiryDate: ['', [Validators.required, VirtualCardExpiryDateValidator()]],
    amountLimit: [this.form.amount, [Validators.required, Validators.pattern]]
  })

  goPrevious() {  //navigate back to previous route
    let previousRoute = localStorage.getItem('previousRoute');
    this.router.navigate(['../' + previousRoute], { relativeTo: this.route })
  }


  noCardsAvailable() //If no cards are available then navigate to registerCard section
  {
    this.router.navigate(['/registerCard'])
  }

  details = {};
  disableProceedButton = false;
  confirmPayment()
  {
    Swal.fire({
      title: 'Confirm Payment?',
      icon: 'warning',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.value) {
        this.updatePaymentDetails()
        // console.log("Confirm Payment")
      }
    })
  }
  updatePaymentDetails() { //updating both the virtual and payment details tables

    this.disableProceedButton = true
    let card_id = this.cardSubmitForm.get('cardNumber').value.substring(16, 18)
    let businessForm = JSON.parse(localStorage.getItem('businessMethod'))
    this.details = {
      "amountLimit": this.virtualCardForm.get('amountLimit').value,
      "businessId": localStorage.getItem('businessId'),
      "cardId": card_id,
      "expiryDate": this.virtualCardForm.get('expiryDate').value,
      "paymentAmount": businessForm.amount,
      "virtualCardNumber": this.virtualCardNumber,
    }

    this._httpService.updatePaymentDetails(this.details)
      .subscribe((data) => {
        Swal.fire
          ({
            title: "Payment Successful!",
            icon: "success",
            width: "400px"
          })
        localStorage.removeItem('businessId');
        localStorage.removeItem('businessMethod');
        localStorage.removeItem('previousRoute')
        this.router.navigate(['../'], { relativeTo: this.route });
      }, (error) => {
        this.disableProceedButton = false
        this.alertMessage = error;
        this.alertCondition = true
      });
  }
}
