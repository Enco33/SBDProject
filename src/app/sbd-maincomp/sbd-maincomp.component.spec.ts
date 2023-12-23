import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdMaincompComponent } from './sbd-maincomp.component';

describe('SbdMaincompComponent', () => {
  let component: SbdMaincompComponent;
  let fixture: ComponentFixture<SbdMaincompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbdMaincompComponent]
    });
    fixture = TestBed.createComponent(SbdMaincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
