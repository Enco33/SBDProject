import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdPercardComponent } from './sbd-percard.component';

describe('SbdPercardComponent', () => {
  let component: SbdPercardComponent;
  let fixture: ComponentFixture<SbdPercardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbdPercardComponent]
    });
    fixture = TestBed.createComponent(SbdPercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
