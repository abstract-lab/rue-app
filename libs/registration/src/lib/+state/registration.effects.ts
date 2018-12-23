import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { RegistrationPartialState } from './registration.reducer';
import {
  RegisterAction,
  RegistrationSuccessAction,
  RegistrationFailAction,
  RegistrationActionTypes
} from './registration.actions';
import { RegistrationService } from '../services/registration.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RegistrationEffects {
  @Effect() register$ = this.dataPersistence.fetch(RegistrationActionTypes.Register, {
      run: (action: RegisterAction, state: RegistrationPartialState) => {
        return this.registrationService
                  .signUp(action.payload.email)
                  .pipe(
                    map(registration => new RegistrationSuccessAction(registration)),
                    catchError(err => of(new RegistrationFailAction(err))),
                  )
      }, onError: (action: RegisterAction, error) => {
        return new RegistrationFailAction(error);
      }
    }
  );

  constructor(
    private registrationService: RegistrationService,
    private actions$: Actions,
    private dataPersistence: DataPersistence<RegistrationPartialState>
  ) {}
}
