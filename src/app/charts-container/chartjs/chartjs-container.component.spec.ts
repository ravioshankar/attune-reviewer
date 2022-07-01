import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsContainerComponent } from './chartjs-container.component';

describe('ChartjsContainerComponent', () => {
  let component: ChartjsContainerComponent;
  let fixture: ComponentFixture<ChartjsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
