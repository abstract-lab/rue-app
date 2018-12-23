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

@Injectable()
export class RegistrationEffects {
  @Effect() loadRegistration$ = this.dataPersistence.fetch(
    RegistrationActionTypes.Register,
    {
      run: (action: RegisterAction, state: RegistrationPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RegistrationSuccessAction([]);
      },

      onError: (action: RegisterAction, error) => {
        console.error('Error', error);
        return new RegistrationFailAction(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RegistrationPartialState>
  ) {}
}
