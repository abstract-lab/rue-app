import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RegistrationState } from '../../+state/registration.reducer';
import * as registrationActions from '../../+state/registration.actions';
import { registrationQuery } from '../../+state/registration.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'rue-app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errorMessage$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<RegistrationState>) { }

  ngOnInit() {
    this.errorMessage$ = this.store.pipe(select(registrationQuery.getError));
    this.loading$ = this.store.pipe(select(registrationQuery.getLoading));
  }

  register(registrationEmailAddress: string) {
    this.store.dispatch(new registrationActions.RegisterAction({ email: registrationEmailAddress }));
  }
}
