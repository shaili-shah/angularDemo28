import { AbstractControl, ValidationErrors } from "@angular/forms";



export  class UserNameValidators{

    static canNotContainSpace(control : AbstractControl) : ValidationErrors | null {

        if((control.value as string).indexOf(' ') >= 0)

        return { canNotContainSpace : true} ;

    return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>  {

        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value == "abc"){
                   
                    resolve({shouldBeUnique : true})
                    }
                else   resolve(null);
                }, 2000);
            }) 
    }

}