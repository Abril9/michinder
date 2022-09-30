import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../paginas/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'salir',
        loadChildren: () => import('../paginas/login/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../paginas/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'busquedas',
        loadChildren: () => import('../paginas/busquedas/busquedas.module').then(m => m.BusquedasPageModule)
      },
      {
        path: 'encuentros',
        loadChildren: () => import('../paginas/encuentros/encuentros.module').then( m => m.EncuentrosPageModule)
      },
      {
        path: 'mispublicaciones',
        loadChildren: () => import('../paginas/mis-publicaciones/mis-publicaciones.module').then( m => m.MisPublicacionesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
