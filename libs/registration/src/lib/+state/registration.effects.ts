import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { RegistrationPartialState } from './registration.reducer';
import {
  LoadRegistration,
  RegistrationLoaded,
  RegistrationLoadError,
  RegistrationActionTypes
} from './registration.actions';

@Injectable()
export class RegistrationEffects {
  @Effect() loadRegistration$ = this.dataPersistence.fetch(
    RegistrationActionTypes.LoadRegistration,
    {
      run: (action: LoadRegistration, state: RegistrationPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RegistrationLoaded([]);
      },

      onError: (action: LoadRegistration, error) => {
        console.error('Error', error);
        return new RegistrationLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RegistrationPartialState>
  ) {}
}
