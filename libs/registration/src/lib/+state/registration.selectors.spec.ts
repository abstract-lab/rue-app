import { RegistrationEntity, RegistrationState } from './registration.reducer';
import { registrationQuery } from './registration.selectors';

describe('Registration Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  let storeState;

  beforeEach(() => {
    const createRegistration = (): RegistrationEntity => ({
      loading: false,
      registrationSucceeded: false
    });

    storeState = {
        entity: {},
        error: ERROR_MSG,
      };
  });

  describe('Registration Selectors', () => {
    it('getLoading() should return the loading status', () => {
      const result = registrationQuery.getLoading(storeState);
      expect(result).toBe(false);
    });

    it('getError() should return the error message', () => {
      const result = registrationQuery.getError(storeState);
      expect(result).toBe(ERROR_MSG);
    });

    it('getRegistrationSuccessfull() should return the current successfull registration status', () => {
      const result = registrationQuery.getRegistrationSuccessfull(storeState);
      expect(result).toBe(false);
    });
  });
});
