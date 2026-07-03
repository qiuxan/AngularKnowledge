import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDefer } from './lazy-defer';

describe('LazyDefer', () => {
  let component: LazyDefer;
  let fixture: ComponentFixture<LazyDefer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyDefer],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyDefer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
