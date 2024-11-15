import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  AlertController,
  LoadingController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  alertCircle, 
  chatbubbles, 
  location, 
  call 
} from 'ionicons/icons';

@Component({
  selector: 'app-boton-sos',
  templateUrl: './boton-sos.page.html',
  styleUrls: ['./boton-sos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    CommonModule,
    FormsModule
  ]
})
export class BotonSosPage implements OnInit {
  private isEmergencyActive = false;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {
    addIcons({ alertCircle, chatbubbles, location, call });
  }

  ngOnInit() {}

  async mostrarAlerta() {
    if (this.isEmergencyActive) {
      return;
    }

    this.isEmergencyActive = true;

    const loading = await this.loadingController.create({
      message: 'Enviando alerta de emergencia...',
      duration: 2000
    });
    await loading.present();

    await loading.onDidDismiss();

    const alert = await this.alertController.create({
      header: 'Alerta Enviada',
      subHeader: 'Tu emergencia será atendida',
      message: 'El equipo de seguridad ha sido notificado y está en camino. Por favor mantente en tu ubicación actual si es seguro hacerlo.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.isEmergencyActive = false;
        }
      }]
    });

    await alert.present();
    this.notificarSeguridad();
  }

  private notificarSeguridad() {
    console.log('Notificando al equipo de seguridad...');
  }

  // Funciones de navegación
  navigateToChat() {
    this.router.navigate(['/user-chat']);
  }

  navigateToMap() {
    this.router.navigate(['/security-map']);
  }

  navigateToContacts() {
    // Asumiendo que crearás una página de contactos
    this.router.navigate(['/contacts']);
  }
}