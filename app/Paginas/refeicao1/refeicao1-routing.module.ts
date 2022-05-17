import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Refeicao1Page } from './refeicao1.page';

const routes: Routes = [
  {
    path: '',
    component: Refeicao1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Refeicao1PageRoutingModule {}
