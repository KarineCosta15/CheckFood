import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sobremesa1PageRoutingModule } from './sobremesa1-routing.module';

import { Sobremesa1Page } from './sobremesa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sobremesa1PageRoutingModule
  ],
  declarations: [Sobremesa1Page]
})
export class Sobremesa1PageModule {}
