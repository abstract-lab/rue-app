import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  REGISTRATION_FEATURE_KEY,
  RegistrationState
} from './registration.reducer';

// Lookup the 'Registration' feature state managed by NgRx
const getRegistrationState = createFeatureSelector<RegistrationState>(
  REGISTRATION_FEATURE_KEY
);

const getLoaded = createSelector(
  getRegistrationState,
  (state: RegistrationState) => state.loaded
);
const getError = createSelector(
  getRegistrationState,
  (state: RegistrationState) => state.error
);

const getAllRegistration = createSelector(
  getRegistrationState,
  getLoaded,
  (state: RegistrationState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getRegistrationState,
  (state: RegistrationState) => state.selectedId
);
const getSelectedRegistration = createSelector(
  getAllRegistration,
  getSelectedId,
  (registration, id) => {
    const result = registration.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const registrationQuery = {
  getLoaded,
  getError,
  getAllRegistration,
  getSelectedRegistration
};
