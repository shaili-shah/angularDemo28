import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  viewMode = 'map';
  canSave = true;

  stitle = 'shipping title from switch';
  btitle = 'billing title from switch';
}