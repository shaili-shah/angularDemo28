import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidator{

    static CheckOldPassword(control : AbstractControl) : Promise<ValidationErrors | null>{

      return new Promise((resolve,reject)=>{
          setTimeout(() => {
              if(control.value != 123456){
                  resolve({CheckOldPassword : true})
              }else resolve (null);
          }, 2000);
      })
    }
}