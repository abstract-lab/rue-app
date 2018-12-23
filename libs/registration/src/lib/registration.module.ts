import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { REGISTRATION_FEATURE_KEY, initialState as registrationInitialState, registrationReducer } from './+state/registration.reducer';
import { RegistrationEffects } from './+state/registration.effects';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(REGISTRATION_FEATURE_KEY, registrationReducer, { initialState: registrationInitialState }),

    EffectsModule.forFeature([RegistrationEffects])
  ]
})
export class RegistrationModule {}
