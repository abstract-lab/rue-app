import { Entity, RegistrationState } from './registration.reducer';
import { registrationQuery } from './registration.selectors';

describe('Registration Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRegistrationId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRegistration = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
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
      const results = registrationQuery.getAllRegistration(storeState);
      const selId = getRegistrationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedRegistration() should return the selected Entity', () => {
      const result = registrationQuery.getSelectedRegistration(storeState);
      const selId = getRegistrationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = registrationQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = registrationQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
