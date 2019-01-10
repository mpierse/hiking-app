import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehobethTrailsComponent } from './rehobeth-trails.component';

describe('RehobethTrailsComponent', () => {
  let component: RehobethTrailsComponent;
  let fixture: ComponentFixture<RehobethTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehobethTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehobethTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
