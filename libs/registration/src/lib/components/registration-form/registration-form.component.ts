import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rue-app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Input() errorMessage: string;
  @Input() loading: boolean;
  @Output() register = new EventEmitter<string>();
}
