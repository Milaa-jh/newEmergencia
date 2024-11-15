import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router

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

  constructor(private router: Router) {} // Inyectar Router en el constructor

  onLogin() {
    // implementar la conexión con la BDD
    console.log('Datos de login:', this.loginData);
    //simula un login exitoso
    this.isLoggedIn = true;
    
    // Después de un login exitoso, redirigir al usuario
    this.router.navigate(['/tab-inicial/boton-sos']); // Asumiendo que el botón de emergencia está en la página home
  }
}