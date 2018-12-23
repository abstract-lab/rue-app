import { RegistrationEntity, RegistrationState } from './registration.reducer';
import { registrationQuery } from './registration.selectors';

describe('Registration Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRegistrationId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRegistration = (id: string, name = ''): RegistrationEntity => ({
      loading: false,
      registrationSucceeded: false
    });
    storeState = {
      registration: {
        list: [
          createRegistration('PRODUCT-AAA'),
          createRegistration('PRODUCT-BBB'),
          createRegistration('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Registration Selectors', () => {
    it('getAllRegistration() should return the list of Registration', () => {
      const result = registrationQuery.getRegistrationSuccessfull(storeState);
      expect(result).toBe(false);
    });

    it('getSelectedRegistration() should return the selected Entity', () => {
      const result = registrationQuery.getError(storeState);
      expect(result).toBe('');
    });

    it("getLoading() should return the current 'loaded' status", () => {
      const result = registrationQuery.getLoading(storeState);
      expect(result).toBe(false);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = registrationQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
