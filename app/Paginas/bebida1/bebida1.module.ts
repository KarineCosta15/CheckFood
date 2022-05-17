import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bebida1PageRoutingModule } from './bebida1-routing.module';

import { Bebida1Page } from './bebida1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bebida1PageRoutingModule
  ],
  declarations: [Bebida1Page]
})
export class Bebida1PageModule {}
