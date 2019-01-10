import { Component, OnInit } from '@angular/core';
import { Trails } from '../trails';
import {WILMTRAILS} from './mock-wilm-trails'


@Component({
  selector: 'app-wilm-trails',
  templateUrl: './wilm-trails.component.html',
  styleUrls: ['./wilm-trails.component.css']
})
export class WilmTrailsComponent implements OnInit {

trails = WILMTRAILS;


  constructor() {}

  ngOnInit() {
  }

}
