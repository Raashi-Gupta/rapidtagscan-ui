import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerCreationComponent } from './scanner-creation.component';

describe('ScannerCreationComponent', () => {
  let component: ScannerCreationComponent;
  let fixture: ComponentFixture<ScannerCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerCreationComponent]
    });
    fixture = TestBed.createComponent(ScannerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
