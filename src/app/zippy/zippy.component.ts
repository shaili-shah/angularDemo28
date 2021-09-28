import { Component, Input, OnInit , HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

@Input('title') title : any;
@Input('billingTitle') billingTitle : any;

isShippingSelected = false;
isBillingSelected = false;

  constructor(private el : ElementRef) { }

  onclickShippingHeading(){
    this.isShippingSelected = !this.isShippingSelected;
  }

  onclickBillingHeading(){
    this.isBillingSelected = !this.isBillingSelected;
  }

}