import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMappingComponent } from './zone-mapping.component';

describe('ZoneMappingComponent', () => {
  let component: ZoneMappingComponent;
  let fixture: ComponentFixture<ZoneMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneMappingComponent]
    });
    fixture = TestBed.createComponent(ZoneMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
