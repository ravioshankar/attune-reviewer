import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarD3Component } from './radar-d3.component';

describe('RadarD3Component', () => {
  let component: RadarD3Component;
  let fixture: ComponentFixture<RadarD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarD3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
