import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, } from '@angular/common';
@Pipe({
  name: 'filterMonth'
})
export class FilterMonthPipe implements PipeTransform {

  transform(value: any, sMonth: string): any {
    var datePipe = new DatePipe("en-US");
    if (sMonth === "") {
      return value;
    }
    const paymentDetails: any = [];

    for (let i = 0; i < Object.keys(value).length; i++) {
      var date = datePipe.transform(value[i]['payment_date'], 'MM');
      if(date === sMonth)
      {
        paymentDetails.push(value[i])
      }
    }
    return paymentDetails;
  }

}
