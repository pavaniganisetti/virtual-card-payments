import { DatePipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';

export function CardExpiryDateValidator(group: AbstractControl): { [key: string]: boolean } | null
{
    const expiryDate = group.get('expiryDate').value;
    if(expiryDate.length != 5)
    {
        return null;
    }
    const datePipe = new DatePipe("en-US");
    let today = new Date();
    let month = datePipe.transform(today,"MM");
    let year = datePipe.transform(today,"yy");
    
    if(year<expiryDate.substring(3,5) 
            || group.get('expiryDate').pristine 
            || ( year == expiryDate.substring(3,5) && month<=expiryDate.substring(0,2) ))
    {
        return null
    }
    else
    {
        return {"isInValidDate":true}
    }
}