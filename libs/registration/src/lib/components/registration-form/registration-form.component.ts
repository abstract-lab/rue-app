import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RegistrationModel } from '../../models/registration.model';

@Component({
  selector: 'rue-app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  @Input() entity: RegistrationModel;
  @Input() errorMessage: string;
  @Input() loading: boolean;
  @Output() register = new EventEmitter<string>();

  onRegister(form: any): void {
    if (form.valid) {
      this.register.emit(form.value.registrationEmail);
    }
  }
}
