import { AbstractControl } from "@angular/forms";

export function PasswordValidator(group: AbstractControl): { [ key: string ] : boolean } | null
{
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    if (password.value === confirmPassword.value || confirmPassword.pristine)
    {
        return null;
    }
    else
    {
        return {'misMatch':true};
    }
}