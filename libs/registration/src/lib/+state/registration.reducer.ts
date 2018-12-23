import {
  RegistrationAction,
  RegistrationActionTypes
} from './registration.actions';

export const REGISTRATION_FEATURE_KEY = 'registration';

/**
 * Interface for the 'Registration' data used in
 *  - RegistrationState, and
 *  - registrationReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RegistrationState {
  list: Entity[]; // list of Registration; analogous to a sql normalized table
  selectedId?: string | number; // which Registration record has been selected
  loaded: boolean; // has the Registration list been loaded
  error?: any; // last none error (if any)
}

export interface RegistrationPartialState {
  readonly [REGISTRATION_FEATURE_KEY]: RegistrationState;
}

export const initialState: RegistrationState = {
  list: [],
  loaded: false
};

export function registrationReducer(
  state: RegistrationState = initialState,
  action: RegistrationAction
): RegistrationState {
  switch (action.type) {
    case RegistrationActionTypes.RegistrationLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
