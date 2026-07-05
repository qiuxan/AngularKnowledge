import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedProfile } from './protected-profile';

describe('ProtectedProfile', () => {
  let component: ProtectedProfile;
  let fixture: ComponentFixture<ProtectedProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectedProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
