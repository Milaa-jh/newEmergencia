import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-inicial',
  templateUrl: './tab-inicial.page.html',
  styleUrls: ['./tab-inicial.page.scss'],
})
export class TabInicialPage {
  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private dbService: DbService,
    private alertController: AlertController
  ) {}

  async onLogin() {
    // Validar campos vacíos
    if (!this.loginData.email || !this.loginData.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor complete todos los campos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Intentar login
    const loginSuccess = this.dbService.login(this.loginData.email, this.loginData.password);
    if (loginSuccess) {
      // Login exitoso, redirigir
      this.router.navigate(['/boton-sos']);
    } else {
      // Login fallido, intentar registro automático
      const registerSuccess = this.dbService.register(this.loginData.email, this.loginData.password);
      
      if (registerSuccess) {
        // Registro exitoso, hacer login y redirigir
        this.dbService.login(this.loginData.email, this.loginData.password);
        this.router.navigate(['boton-sos']);
      } else {
        // Registro fallido (email ya existe pero contraseña incorrecta)
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'La contraseña es incorrecta para el correo ingresado',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
