import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobremesa1',
  templateUrl: './sobremesa1.page.html',
  styleUrls: ['./sobremesa1.page.scss'],
})
export class Sobremesa1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
