import { RegisterAction } from './registration.actions';
import {
  RegistrationState,
  RegistrationEntity,
  initialState,
  registrationReducer
} from './registration.reducer';

describe('Registration Reducer', () => {
  const getRegistrationId = it => it['id'];
  let createRegistration;

  beforeEach(() => {
    createRegistration = (id: string, name = ''): RegistrationEntity => ({
      loading: false,
      registrationSucceeded: false
    });
  });

  describe('valid Registration actions ', () => {
    it('should return set the list of known Registration', () => {
      const registrations = {
        email: ''
      };
      
      const action = new RegisterAction(registrations);
      const result: RegistrationState = registrationReducer(
        initialState,
        action
      );
      
      expect(result.entity.registrationSucceeded).toBe(true);
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = registrationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
