import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratoEntPageRoutingModule } from './prato-ent-routing.module';

import { PratoEntPage } from './prato-ent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratoEntPageRoutingModule
  ],
  declarations: [PratoEntPage]
})
export class PratoEntPageModule {}
