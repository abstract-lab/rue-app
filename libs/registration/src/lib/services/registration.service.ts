import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class RegistrationService {

  constructor() { }

  signUp(registrationEmailAddress: string) {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if ( registrationEmailAddress && regexp.test(registrationEmailAddress )) {
       return of({ emailSent: true }).pipe(delay(5000));
    } else {
      return throwError('Wrong format');
    }
  }
}
