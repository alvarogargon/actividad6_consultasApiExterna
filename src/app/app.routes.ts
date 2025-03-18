import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { ActualizarUsuarioComponent } from './pages/actualizar-usuario/actualizar-usuario.component';
import { C404Component } from './components/c404/c404.component';
import { UsuariosCardComponent } from './components/usuarios-card/usuarios-card.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home"},
    { path: "home", component: HomeComponent },
    { path: "usuarios", component: UsuariosComponent },
    { path: "usuarios/:id", component: UsuariosComponent },
    { path: "usuariosCard", component: UsuariosCardComponent },
    { path: "nuevoUsuario", component: NuevoUsuarioComponent },
    { path: "actualizarUsuario", component: ActualizarUsuarioComponent },
    { path: "actualizarUsuario/:id", component: ActualizarUsuarioComponent },
    { path: "**", component: C404Component },
];
