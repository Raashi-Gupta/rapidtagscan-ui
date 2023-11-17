import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackerComponent } from './vehicle-tracker.component';

describe('VehicleTrackerComponent', () => {
  let component: VehicleTrackerComponent;
  let fixture: ComponentFixture<VehicleTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleTrackerComponent]
    });
    fixture = TestBed.createComponent(VehicleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
