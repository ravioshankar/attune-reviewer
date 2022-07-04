import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataEditorComponent } from './data-editor.component';

describe('DataEditorComponent', () => {
  let component: DataEditorComponent;
  let fixture: ComponentFixture<DataEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataEditorComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
