import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { REGISTRATION_FEATURE_KEY, initialState as registrationInitialState, registrationReducer } from './+state/registration.reducer';
import { RegistrationEffects } from './+state/registration.effects';
import { RegistrationComponent } from './containers/registration/registration.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: RegistrationComponent}
    ]),

    StoreModule.forFeature(REGISTRATION_FEATURE_KEY, registrationReducer, { initialState: registrationInitialState }),

    EffectsModule.forFeature([RegistrationEffects])
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {}
