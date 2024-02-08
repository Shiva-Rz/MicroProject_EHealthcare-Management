import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoroperationComponent } from './doctoroperation.component';

describe('DoctoroperationComponent', () => {
  let component: DoctoroperationComponent;
  let fixture: ComponentFixture<DoctoroperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctoroperationComponent]
    });
    fixture = TestBed.createComponent(DoctoroperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
