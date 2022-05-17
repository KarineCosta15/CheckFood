import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratoEntPage } from './prato-ent.page';

const routes: Routes = [
  {
    path: '',
    component: PratoEntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratoEntPageRoutingModule {}
