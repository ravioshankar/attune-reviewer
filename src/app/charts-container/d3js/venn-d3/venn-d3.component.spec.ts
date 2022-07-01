import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VennD3Component } from './venn-d3.component';

describe('VennD3Component', () => {
  let component: VennD3Component;
  let fixture: ComponentFixture<VennD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VennD3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VennD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
