import { Component, inject, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-vista',
  imports: [RouterLink],
  templateUrl: './usuario-vista.component.html',
  styleUrl: './usuario-vista.component.css'
})
export class UsuarioVistaComponent {
  @Input() id: string = ""
  usuariosService = inject(UsuariosService)
  usuario!: IUsuario

  async ngOnInit() {
   // console.log(this.id)

   let response = await this.usuariosService.getById(this.id)
   this.usuario = response;
  }
}
