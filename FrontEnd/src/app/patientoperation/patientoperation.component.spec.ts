import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientoperationComponent } from './patientoperation.component';

describe('PatientoperationComponent', () => {
  let component: PatientoperationComponent;
  let fixture: ComponentFixture<PatientoperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientoperationComponent]
    });
    fixture = TestBed.createComponent(PatientoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
