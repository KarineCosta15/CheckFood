import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sobremesa1Page } from './sobremesa1.page';

const routes: Routes = [
  {
    path: '',
    component: Sobremesa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sobremesa1PageRoutingModule {}
