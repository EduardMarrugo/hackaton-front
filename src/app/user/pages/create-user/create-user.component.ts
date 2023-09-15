import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  public createUserForm: FormGroup = this.fb.group({
    Name: [''],
    Email: [''],
    Password: [''],
    RepeatPassword: [''],
  });

  constructor(private fb: FormBuilder) {}
  createUser() {
    console.log(this.createUserForm.value);
    console.log('Create User');
  }
}
