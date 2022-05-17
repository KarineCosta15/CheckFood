import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Principal', url: '/principal', icon: 'list-circle' },
    { title: 'Promoção do Dia', url: '/promo', icon: 'restaurant' },
    { title: 'Cardápio', url: '/lista', icon: 'fast-food' },
  ];
  constructor() {}
}
