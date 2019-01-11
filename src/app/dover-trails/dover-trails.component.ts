import { Component, OnInit } from '@angular/core';
import { DOVERTRAILS } from './mock-dover-trails';
import { Trails } from '../trails';

@Component({
  selector: 'app-dover-trails',
  templateUrl: './dover-trails.component.html',
  styleUrls: ['./dover-trails.component.css']
})
export class DoverTrailsComponent implements OnInit {

  trails = DOVERTRAILS;

  selectedTrail : Trails;

  onSelect(trail: Trails): void {
    this.selectedTrail = trail;
  }

  constructor() { }

  ngOnInit() {
  }

}
