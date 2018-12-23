import { async, TestBed } from '@angular/core/testing';
import { RegistrationModule } from './registration.module';

describe('RegistrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RegistrationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RegistrationModule).toBeDefined();
  });
});
