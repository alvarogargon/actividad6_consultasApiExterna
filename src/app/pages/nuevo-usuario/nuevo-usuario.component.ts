import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellido: new FormControl("", [
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

}
