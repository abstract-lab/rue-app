import { RegistrationLoaded } from './registration.actions';
import {
  RegistrationState,
  Entity,
  initialState,
  registrationReducer
} from './registration.reducer';

describe('Registration Reducer', () => {
  const getRegistrationId = it => it['id'];
  let createRegistration;

  beforeEach(() => {
    createRegistration = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Registration actions ', () => {
    it('should return set the list of known Registration', () => {
      const registrations = [
        createRegistration('PRODUCT-AAA'),
        createRegistration('PRODUCT-zzz')
      ];
      const action = new RegistrationLoaded(registrations);
      const result: RegistrationState = registrationReducer(
        initialState,
        action
      );
      const selId: string = getRegistrationId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
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
