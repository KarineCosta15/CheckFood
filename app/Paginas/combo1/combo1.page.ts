import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-combo1',
  templateUrl: './combo1.page.html',
  styleUrls: ['./combo1.page.scss'],
})
export class Combo1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
