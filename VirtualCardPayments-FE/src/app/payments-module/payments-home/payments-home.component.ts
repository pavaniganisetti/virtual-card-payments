import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-payments-home',
  templateUrl: './payments-home.component.html',
  styleUrls: ['./payments-home.component.css']
})
export class PaymentsHomeComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('businessId') !== null && localStorage.getItem('previousRoute') !== null)
    {
      this.businessForm.patchValue({
        businessRouteAndId: localStorage.getItem('businessId')+localStorage.getItem('previousRoute')
      })
    }
  }

  businessTypes = [
    {routeName:"mobile", business_id: 1, business_method: "Mobile Recharge" },
    {routeName:"electricity", business_id: 2, business_method: "Electrcity Bill" },
    {routeName:"dth", business_id: 3, business_method: "DTH/Cable Tv" }
  ];

  businessForm  = this.fb.group({
    businessRouteAndId: ['',[Validators.required]], //value = business_id+routeName
  })
  onSubmit()
  {
    let routeAndId = this.businessForm.get('businessRouteAndId').value
    let routeName = routeAndId.substring(1) //extracting route name
    localStorage.setItem('businessId',routeAndId.substring(0,1)) //extracting id
    localStorage.setItem('previousRoute',routeName)
    this.router.navigate([routeName],{relativeTo:this.route});
  }
}
