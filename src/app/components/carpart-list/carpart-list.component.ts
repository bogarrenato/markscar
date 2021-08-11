import { Component, OnInit } from '@angular/core';
import { CarpartComponent } from '../carpart/carpart.component';
import {CarPart} from '../../models/carpart'

@Component({
  selector: 'app-carpart-list',
  templateUrl: './carpart-list.component.html',
  styleUrls: ['./carpart-list.component.scss']
})
export class CarpartListComponent implements OnInit {

  carparts:CarPart[]=[
    {id:1,part:'asd'},
    {id:2,part:'asd2'},
    {id:3,part:'asd3'},
    {id:4,part:'asd4'},
    {id:5,part:'asd5'},
    {id:6,part:'asd6'},
    {id:7,part:'asd7'},
    
  ]

  constructor() { }

  ngOnInit(): void {
  }




}
