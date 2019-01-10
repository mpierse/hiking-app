import { Component, OnInit } from '@angular/core';
import { DOVERTRAILS } from './mock-dover-trails';

@Component({
  selector: 'app-dover-trails',
  templateUrl: './dover-trails.component.html',
  styleUrls: ['./dover-trails.component.css']
})
export class DoverTrailsComponent implements OnInit {

  trails = DOVERTRAILS;

  constructor() { }

  ngOnInit() {
  }

}
