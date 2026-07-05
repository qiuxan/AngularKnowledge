import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAsync } from './ngrx-async';

describe('NgrxAsync', () => {
  let component: NgrxAsync;
  let fixture: ComponentFixture<NgrxAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxAsync],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxAsync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
