import { Action } from '@ngrx/store';
import { Entity } from './registration.reducer';

export enum RegistrationActionTypes {
  Register = '[Registration] Register',
  RegistrationSuccess = '[Registration] Registration Success',
  RegistrationFailed = '[Registration] Registration Fail'
}

export class RegisterAction implements Action {
  readonly type = RegistrationActionTypes.Register;

  constructor(public payload: { email: string }) {}
}

export class RegistrationSuccessAction implements Action {
  readonly type = RegistrationActionTypes.RegistrationSuccess;

  constructor(public payload: any) {}
}

export class RegistrationFailAction implements Action {
  readonly type = RegistrationActionTypes.RegistrationFailed;

  constructor(public payload: any) {}
}

export type RegistrationAction =
  | RegisterAction
  | RegistrationSuccessAction
  | RegistrationFailAction;

export const fromRegistrationActions = {
  RegisterAction: RegisterAction,
  RegistrationSuccessAction: RegistrationSuccessAction,
  RegistrationFailAction: RegistrationFailAction,
};
