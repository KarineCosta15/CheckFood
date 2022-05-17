import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bebida1Page } from './bebida1.page';

const routes: Routes = [
  {
    path: '',
    component: Bebida1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bebida1PageRoutingModule {}
