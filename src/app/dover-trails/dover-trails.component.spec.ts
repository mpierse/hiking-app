import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoverTrailsComponent } from './dover-trails.component';

describe('DoverTrailsComponent', () => {
  let component: DoverTrailsComponent;
  let fixture: ComponentFixture<DoverTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoverTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoverTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
