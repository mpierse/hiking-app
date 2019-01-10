import { Component, OnInit } from '@angular/core';
import { REHOBETHTRAILS } from './mock-rehobeth-trails';

@Component({
  selector: 'app-rehobeth-trails',
  templateUrl: './rehobeth-trails.component.html',
  styleUrls: ['./rehobeth-trails.component.css']
})
export class RehobethTrailsComponent implements OnInit {

  trails =REHOBETHTRAILS;

  constructor() { }

  ngOnInit() {
  }

}
