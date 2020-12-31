import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.css']
})
export class DthComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('businessMethod') !== null)
    {
      let formValue = JSON.parse(localStorage.getItem('businessMethod'))
      this.dthForm.patchValue({
        number:formValue.number,
        amount:formValue.amount
      })
    }
  }

  dthForm = this.fb.group({
    number: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(11)]],
    amount: ['', [Validators.required]]
  })
  onDthSubmit() {
    localStorage.setItem('businessMethod',JSON.stringify(this.dthForm.value))
    this.router.navigate(['../submit'],{relativeTo:this.route})
  }
}
