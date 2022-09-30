import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarme',
    loadChildren: () => import('./paginas/login/registrarme/registrarme.module').then( m => m.RegistrarmePageModule)
  },
  {
    path: 'mis-publicaciones',
    loadChildren: () => import('./paginas/mis-publicaciones/mis-publicaciones.module').then( m => m.MisPublicacionesPageModule)
  },
  {
    path: 'desarrollando',
    loadChildren: () => import('./partes/desarrollando/desarrollando.module').then( m => m.DesarrollandoComponentModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
