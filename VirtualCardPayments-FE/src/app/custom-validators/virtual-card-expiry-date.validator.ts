import { DatePipe } from '@angular/common';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function VirtualCardExpiryDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        let controlValue = control.value;
        const datePipe = new DatePipe("en-US");
        let today = new Date();
        let expiryDate = datePipe.transform(controlValue,"yyyy-MM-dd")
        let date = datePipe.transform(today,"yyyy-MM-dd")
        if(date<=expiryDate || control.pristine )
        {
            return null
        }
        else
        {
            return {"isValidDate":false}
        }
    }
}