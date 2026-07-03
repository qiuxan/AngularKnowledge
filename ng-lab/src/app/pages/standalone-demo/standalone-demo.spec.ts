import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneDemo } from './standalone-demo';

describe('StandaloneDemo', () => {
  let component: StandaloneDemo;
  let fixture: ComponentFixture<StandaloneDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(StandaloneDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
