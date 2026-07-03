import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRxjs } from './signal-rxjs';

describe('SignalRxjs', () => {
  let component: SignalRxjs;
  let fixture: ComponentFixture<SignalRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalRxjs],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
