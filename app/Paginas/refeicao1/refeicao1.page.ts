import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-refeicao1',
  templateUrl: './refeicao1.page.html',
  styleUrls: ['./refeicao1.page.scss'],
})
export class Refeicao1Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  abrirPagina(x) {
    this.nav.navigateForward (x);
  }
}
