import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tab-inicial',
    pathMatch: 'full'
  },
  {
    path: 'tab-inicial',
    loadChildren: () => import('./page/tab-inicial/tab-inicial.module').then(m => m.TabInicialPageModule)
  },
  {
    path: 'boton-sos', // Nueva ruta agregada
    loadChildren: () => import('./page/boton-sos/boton-sos.module').then(m => m.BotonSOSPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
