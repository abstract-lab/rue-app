import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor() { }

  signUp(registrationEmailAddress: string) {
    return of({ emailSent: true });
  }
}
