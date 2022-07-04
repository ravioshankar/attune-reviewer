import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VennChartComponent } from './venn-chart.component';
Chart.register(VennDiagramController, ArcSlice);

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
