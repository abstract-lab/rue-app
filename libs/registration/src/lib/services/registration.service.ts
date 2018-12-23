import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor() { }

  signUp() {
    return of({ emailSent: true });
  }
}
