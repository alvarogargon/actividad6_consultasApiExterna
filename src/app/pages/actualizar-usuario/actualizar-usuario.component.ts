import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      image: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])
    })
  }

  getDataForm() {
    this.userForm.reset()
  }

  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

}
