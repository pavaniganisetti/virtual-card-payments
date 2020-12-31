import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DthComponent } from './dth/dth.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { PaymentsHomeComponent } from './payments-home/payments-home.component';
import { PaymentsSubmissionComponent } from './payments-submission/payments-submission.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsHomeComponent,
    children: [
      { path: 'mobile', component: MobileRechargeComponent },
      { path: 'dth', component: DthComponent },
      { path: 'electricity', component: ElectricityBillComponent },
    ]
  },
  {path:'submit',component:PaymentsSubmissionComponent},
  { path: '**', component: PaymentsHomeComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsModuleRoutingModule { }
