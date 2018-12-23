import { Action } from '@ngrx/store';
import { Entity } from './registration.reducer';

export enum RegistrationActionTypes {
  LoadRegistration = '[Registration] Load Registration',
  RegistrationLoaded = '[Registration] Registration Loaded',
  RegistrationLoadError = '[Registration] Registration Load Error'
}

export class LoadRegistration implements Action {
  readonly type = RegistrationActionTypes.LoadRegistration;
}

export class RegistrationLoadError implements Action {
  readonly type = RegistrationActionTypes.RegistrationLoadError;
  constructor(public payload: any) {}
}

export class RegistrationLoaded implements Action {
  readonly type = RegistrationActionTypes.RegistrationLoaded;
  constructor(public payload: Entity[]) {}
}

export type RegistrationAction =
  | LoadRegistration
  | RegistrationLoaded
  | RegistrationLoadError;

export const fromRegistrationActions = {
  LoadRegistration,
  RegistrationLoaded,
  RegistrationLoadError
};
