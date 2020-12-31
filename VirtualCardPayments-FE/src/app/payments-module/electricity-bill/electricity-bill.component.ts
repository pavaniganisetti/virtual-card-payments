import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.css']
})
export class ElectricityBillComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('businessMethod') !== null)
    {
      let formValue = JSON.parse(localStorage.getItem('businessMethod'))
      this.eForm.patchValue({
        number:formValue.number,
        amount:formValue.amount
      })
    }
  }
  eForm = this.fb.group({
    number:['',[Validators.required,Validators.maxLength(15),Validators.minLength(15)]],
    amount:['',[Validators.required]]
  })
  onSubmit()
  {
    localStorage.setItem('businessMethod',JSON.stringify(this.eForm.value))
    this.router.navigate(['../submit'],{relativeTo:this.route})
  }
}
