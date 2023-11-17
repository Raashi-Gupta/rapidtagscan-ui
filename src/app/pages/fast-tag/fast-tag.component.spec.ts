import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastTagComponent } from './fast-tag.component';

describe('FastTagComponent', () => {
  let component: FastTagComponent;
  let fixture: ComponentFixture<FastTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FastTagComponent]
    });
    fixture = TestBed.createComponent(FastTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
