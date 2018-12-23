import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { RegistrationEffects } from './registration.effects';
import { LoadRegistration, RegistrationLoaded } from './registration.actions';

describe('RegistrationEffects', () => {
  let actions: Observable<any>;
  let effects: RegistrationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        RegistrationEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(RegistrationEffects);
  });

  describe('loadRegistration$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadRegistration() });
      expect(effects.loadRegistration$).toBeObservable(
        hot('-a-|', { a: new RegistrationLoaded([]) })
      );
    });
  });
});
