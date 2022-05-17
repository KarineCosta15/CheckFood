import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
