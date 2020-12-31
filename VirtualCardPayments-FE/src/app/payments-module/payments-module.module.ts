import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsModuleRoutingModule } from './payments-module-routing.module';
import { PaymentsHomeComponent } from './payments-home/payments-home.component';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { DthComponent } from './dth/dth.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PaymentsSubmissionComponent } from './payments-submission/payments-submission.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';


@NgModule({
  declarations: [PaymentsHomeComponent, MobileRechargeComponent, DthComponent, PaymentsSubmissionComponent, ElectricityBillComponent],
  imports: [
    CommonModule,
    PaymentsModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModuleModule { }
