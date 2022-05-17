import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bebida1',
  templateUrl: './bebida1.page.html',
  styleUrls: ['./bebida1.page.scss'],
})
export class Bebida1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
