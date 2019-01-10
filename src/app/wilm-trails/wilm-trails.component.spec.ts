import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WilmTrailsComponent } from './wilm-trails.component';

describe('WilmTrailsComponent', () => {
  let component: WilmTrailsComponent;
  let fixture: ComponentFixture<WilmTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WilmTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WilmTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
