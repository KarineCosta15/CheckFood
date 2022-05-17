import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./Paginas/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./Paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./Paginas/promo/promo.module').then( m => m.PromoPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./Paginas/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'combo1',
    loadChildren: () => import('./Paginas/combo1/combo1.module').then( m => m.Combo1PageModule)
  },
  {
    path: 'prato-ent',
    loadChildren: () => import('./Paginas/prato-ent/prato-ent.module').then( m => m.PratoEntPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./Paginas/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'refeicao',
    loadChildren: () => import('./Paginas/refeicao/refeicao.module').then( m => m.RefeicaoPageModule)
  },
  {
    path: 'refeicao1',
    loadChildren: () => import('./Paginas/refeicao1/refeicao1.module').then( m => m.Refeicao1PageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./Paginas/sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'sobremesa1',
    loadChildren: () => import('./Paginas/sobremesa1/sobremesa1.module').then( m => m.Sobremesa1PageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./Paginas/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'bebida1',
    loadChildren: () => import('./Paginas/bebida1/bebida1.module').then( m => m.Bebida1PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
