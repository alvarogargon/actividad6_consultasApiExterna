import { Component, inject, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  @Input() idUsuario: string = ""
  usuario! : IUsuario | any
  usuarioService = inject(UsuariosService)
  router = inject(Router)

  async ngOnInit() {
    let id = this.idUsuario

    try {
      this.usuario = await this.usuarioService.getById(id)
    } catch(error) {
      alert("Se ha producido eorror")
    }
  }
}
