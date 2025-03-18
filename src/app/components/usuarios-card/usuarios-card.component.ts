import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-card',
  imports: [RouterLink],
  templateUrl: './usuarios-card.component.html',
  styleUrl: './usuarios-card.component.css'
})
export class UsuariosCardComponent {
  @Input() id: string = ""
  miUsuario!: IUsuario | any
  usuariosService = inject(UsuariosService)

  async ngOnInit() {
    let id = this.id

    this.miUsuario = await this.usuariosService.getById(id)
  }

}
