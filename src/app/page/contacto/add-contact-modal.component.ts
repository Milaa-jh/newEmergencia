import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-contact-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title color="danger">Agregar Contacto</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Nombre</ion-label>
          <ion-input [(ngModel)]="newContact.name" placeholder="Ingrese nombre"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Teléfono</ion-label>
          <ion-input [(ngModel)]="newContact.phone" type="tel" placeholder="Ingrese teléfono"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Tipo</ion-label>
          <ion-select [(ngModel)]="newContact.type">
            <ion-select-option value="Seguridad">Seguridad</ion-select-option>
            <ion-select-option value="Personal">Contacto personal</ion-select-option>
            <ion-select-option value="Médico">Médico</ion-select-option>
            <ion-select-option value="Emergencia">Emergencia</ion-select-option>
            <ion-select-option value="Policía">Policía</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <div class="ion-padding">
        <ion-button expand="block" color="danger" (click)="saveContact()">
          Guardar Contacto
        </ion-button>
      </div>
    </ion-content>
  `
})
export class AddContactModalComponent {
  newContact = {
    name: '',
    phone: '',
    type: ''
  };

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveContact() {
    if (this.newContact.name && this.newContact.phone) {
      this.modalCtrl.dismiss(this.newContact);
    }
  }
}