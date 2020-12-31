import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'filterYear'
})
export class FilterYearPipe implements PipeTransform {

  transform(value: any, sYear: string): any {
    var datePipe = new DatePipe("en-US");
    if (sYear === "") {
      return value;
    }
    const paymentDetails: any = [];

    for (let i = 0; i < Object.keys(value).length; i++) {
      var date = datePipe.transform(value[i]['payment_date'], 'yyyy');
      if(date === sYear)
      {
        paymentDetails.push(value[i])
      }
    }
    return paymentDetails;
  }

}
