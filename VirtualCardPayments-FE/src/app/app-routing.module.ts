import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardRegistrationFormComponent } from './card-registration-form/card-registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {AuthorizationCanactivateService} from './services/authorization-canactivate.service';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:SignUpFormComponent},
  {path:'signUp',component:SignUpFormComponent},
  {path:"login",component:LoginFormComponent},
  {path:"registerCard",component:CardRegistrationFormComponent},
  {path:"logout",component:LogoutComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'about',component:AboutComponent},
  {path: 'payments', loadChildren: () => import('../app/payments-module/payments-module.module').then(m => m.PaymentsModuleModule)},
  {path:'**',component:SignUpFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
