import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prato-ent',
  templateUrl: './prato-ent.page.html',
  styleUrls: ['./prato-ent.page.scss'],
})
export class PratoEntPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
