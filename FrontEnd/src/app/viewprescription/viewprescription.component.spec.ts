import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprescriptionComponent } from './viewprescription.component';

describe('ViewprescriptionComponent', () => {
  let component: ViewprescriptionComponent;
  let fixture: ComponentFixture<ViewprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprescriptionComponent]
    });
    fixture = TestBed.createComponent(ViewprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
