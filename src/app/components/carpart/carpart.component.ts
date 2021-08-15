import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpart',
  templateUrl: './carpart.component.html',
  styleUrls: ['./carpart.component.scss']
})
export class CarpartComponent implements OnInit {

  myCurrencyValue:number=10;

  constructor() { }

  ngOnInit(): void {
  }

}
