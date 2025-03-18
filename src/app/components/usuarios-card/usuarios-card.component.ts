import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';

@Component({
  selector: 'app-usuarios-card',
  imports: [RouterLink],
  templateUrl: './usuarios-card.component.html',
  styleUrl: './usuarios-card.component.css'
})
export class UsuariosCardComponent {
  @Input() miUsuario!: IUsuario;

}
