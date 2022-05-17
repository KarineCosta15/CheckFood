import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Refeicao1PageRoutingModule } from './refeicao1-routing.module';

import { Refeicao1Page } from './refeicao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Refeicao1PageRoutingModule
  ],
  declarations: [Refeicao1Page]
})
export class Refeicao1PageModule {}
