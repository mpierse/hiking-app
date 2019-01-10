import { Component, OnInit } from '@angular/core';

import { Trails } from '../trails';


@Component({
  selector: 'app-wilm-trails',
  templateUrl: './wilm-trails.component.html',
  styleUrls: ['./wilm-trails.component.css']
})
export class WilmTrailsComponent implements OnInit {

wilmTrail: Trails = { 
  id : 1,
  name : 'Wilmington Trails'
};

  constructor() {}

  ngOnInit() {
  }

}
