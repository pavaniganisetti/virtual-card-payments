import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-recharge',
  templateUrl: './mobile-recharge.component.html',
  styleUrls: ['./mobile-recharge.component.css']
})
export class MobileRechargeComponent implements OnInit {
  
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('businessMethod') !== null)
    {
      let formValue = JSON.parse(localStorage.getItem('businessMethod'))
      this.mobileForm.patchValue({
        number:formValue.number,
        amount:formValue.amount
      })
    }
  }

  mobileForm = this.fb.group({
    number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern]],
    amount: ['', [Validators.required]]
  })

  onSubmit()
  {
    localStorage.setItem('businessMethod',JSON.stringify(this.mobileForm.value))
    this.router.navigate(['../submit'],{relativeTo:this.route})
  }
}
