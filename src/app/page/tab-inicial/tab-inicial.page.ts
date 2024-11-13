import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
})
export class TabInicialPage {
  isLoggedIn = false;
  loginData = {
    email: '',
    password: ''
  };

  constructor() {}

  onLogin() {
    // implementar la conexión con la BDD
    console.log('Datos de login:', this.loginData);
    //simula un login exitoso
    this.isLoggedIn = true;
  }
}
