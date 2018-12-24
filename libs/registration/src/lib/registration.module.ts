import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { REGISTRATION_FEATURE_KEY, initialState as registrationInitialState, registrationReducer } from './+state/registration.reducer';
import { RegistrationEffects } from './+state/registration.effects';
import { RegistrationComponent } from './containers/registration/registration.component';
import { RegistrationService } from './services/registration.service';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RegistrationComponent }
    ]),

    StoreModule.forFeature(REGISTRATION_FEATURE_KEY, registrationReducer, { initialState: registrationInitialState }),
    EffectsModule.forFeature([RegistrationEffects]),
    ClarityModule,
  ],
  declarations: [RegistrationComponent, RegistrationFormComponent],
  providers: [ RegistrationService ]
})
export class RegistrationModule {}
