import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneCreationComponent } from './zone-creation.component';

describe('ZoneCreationComponent', () => {
  let component: ZoneCreationComponent;
  let fixture: ComponentFixture<ZoneCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneCreationComponent]
    });
    fixture = TestBed.createComponent(ZoneCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
