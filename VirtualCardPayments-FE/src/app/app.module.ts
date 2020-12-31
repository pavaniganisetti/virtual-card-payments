import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CardRegistrationFormComponent } from './card-registration-form/card-registration-form.component';
import { HttpErrorInterceptor } from './services/http-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterMonthPipe } from './pipes/filter-month.pipe';
import { FilterYearPipe } from './pipes/filter-year.pipe';
import { AboutComponent } from './about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    CardRegistrationFormComponent,
    HeaderComponent,
    LogoutComponent,
    AnalyticsComponent,
    FilterDatePipe,
    FilterMonthPipe,
    FilterYearPipe,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,

    useClass: HttpErrorInterceptor,

    multi: true
  },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
