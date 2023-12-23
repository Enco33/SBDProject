import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdTableComponent } from './sbd-table.component';

describe('SbdTableComponent', () => {
  let component: SbdTableComponent;
  let fixture: ComponentFixture<SbdTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbdTableComponent]
    });
    fixture = TestBed.createComponent(SbdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
