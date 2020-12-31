import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(value: any, sDate: string): any {
    var datePipe = new DatePipe("en-US");
    if (sDate === "") {
      return value;
    }
    const paymentDetails: any = [];

    for (let i = 0; i < Object.keys(value).length; i++) {
      var date = datePipe.transform(value[i]['payment_date'], 'dd');
      if(date === sDate)
      {
        paymentDetails.push(value[i])
      }
    }
    return paymentDetails;
  }

}
