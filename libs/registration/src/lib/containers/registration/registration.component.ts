import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationState } from '../../+state/registration.reducer';
import * as registrationActions from '../../+state/registration.actions';

@Component({
  selector: 'rue-app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private store: Store<RegistrationState>) { }

  ngOnInit() {
  }

  register(registrationEmailAddress: string) {
    this.store.dispatch(new registrationActions.RegisterAction({ email: registrationEmailAddress }));
  }
}
