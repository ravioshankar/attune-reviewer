import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsContainerComponent } from './d3js-container.component';

describe('D3jsContainerComponent', () => {
  let component: D3jsContainerComponent;
  let fixture: ComponentFixture<D3jsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [D3jsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(D3jsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
