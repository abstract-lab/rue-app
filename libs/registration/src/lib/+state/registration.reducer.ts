import {
  RegistrationAction,
  RegistrationActionTypes
} from './registration.actions';

export const REGISTRATION_FEATURE_KEY = 'registration';

export interface RegistrationEntity {
  registrationSucceeded?: boolean,
  loading: boolean,
}

export interface RegistrationState {
  readonly entity: RegistrationEntity;
  error?: any;
}

export interface RegistrationPartialState {
  readonly [REGISTRATION_FEATURE_KEY]: RegistrationState;
}

export const initialState: RegistrationState = {
  entity: { loading: false },
  error: ''
};

export function registrationReducer(state: RegistrationState = initialState, action: RegistrationAction): RegistrationState {
  switch (action.type) {
    case RegistrationActionTypes.Register: {
      state = {
        ...state,
        entity: {
          loading: true,
        }
      }
      break;
    }

    case RegistrationActionTypes.RegistrationSuccess: {
      state = {
        ...state,
        entity: action.payload,
        error: '',
      };
      break;
    }

    case RegistrationActionTypes.RegistrationFailed: {
      state = {
        ...state,
        entity: {
          registrationSucceeded: false,
          loading: false,
        },
        error: action.payload,
      }
      break;
    }
  }
  return state;
}
