import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VennChartComponent } from './venn-chart.component';

describe('VennChartComponent', () => {
  let component: VennChartComponent;
  let fixture: ComponentFixture<VennChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VennChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VennChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    // expect(component).toBeTruthy();
  });
});
