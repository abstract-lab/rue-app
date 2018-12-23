import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  REGISTRATION_FEATURE_KEY,
  RegistrationState
} from './registration.reducer';

// Lookup the 'Registration' feature state managed by NgRx
const getRegistrationState = createFeatureSelector<RegistrationState>(
  REGISTRATION_FEATURE_KEY
);

const getLoading = createSelector(
  getRegistrationState,
  (state: RegistrationState) => state.entity.loading
);

const getError = createSelector(
  getRegistrationState,
  (state: RegistrationState) => state.error
);

const getRegistrationSuccessfull = createSelector(
  getRegistrationState,
  getLoading,
  (state: RegistrationState) => state.entity.registrationSucceeded
);


export const registrationQuery = {
  getLoading,
  getError,
  getRegistrationSuccessfull
};
