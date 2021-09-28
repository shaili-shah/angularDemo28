import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format : any

  constructor(private el : ElementRef) { }

  @HostListener('blur') onBlur(){
    if(this.format == "uppercase"){
      let value : string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();  
    }else{
      let value : string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toLowerCase();   
    }
    
  }

}