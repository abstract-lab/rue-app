import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rue-app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Output() register = new EventEmitter<string>();
}
