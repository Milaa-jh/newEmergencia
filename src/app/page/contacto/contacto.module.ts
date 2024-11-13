import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactoPageRoutingModule } from './contacto-routing.module';
import { ContactoPage } from './contacto.page';
import { AddContactModalComponent } from './add-contact-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoPageRoutingModule
  ],
  declarations: [ContactoPage, AddContactModalComponent]
})
export class ContactoPageModule {}
