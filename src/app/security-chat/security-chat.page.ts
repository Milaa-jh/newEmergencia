import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { send } from 'ionicons/icons';

interface Message {
  sender: string;
  message: string;
  time: Date;
}

@Component({
  selector: 'app-security-chat',
  templateUrl: './security-chat.page.html',
  styleUrls: ['./security-chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class SecurityChatPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  
  messages: Message[] = [];
  newMessage: string = '';
  
  // Respuestas predefinidas del bot
  botResponses = [
    'Un equipo de seguridad está en camino a tu ubicación.',
    'Por favor, mantente en un lugar seguro. Ya hemos enviado ayuda.',
    'Entendido. ¿Podrías proporcionarnos más detalles sobre la situación?',
    'Personal de seguridad ha sido notificado y está respondiendo a tu emergencia.',
    'Estamos monitoreando tu ubicación. Mantén la calma y sigue nuestras instrucciones.'
  ];

  constructor() {
    addIcons({ send });
    // Mensaje inicial del bot
    this.addBotMessage('Bienvenido al chat de emergencia. ¿En qué podemos ayudarte?');
  }

  ngOnInit() {}

  async sendMessage() {
    if (this.newMessage.trim()) {
      // Agregar mensaje del usuario
      this.messages.push({
        sender: 'Usuario',
        message: this.newMessage.trim(),
        time: new Date()
      });

      // Limpiar input
      this.newMessage = '';

      // Scroll al último mensaje
      await this.scrollToBottom();

      // Simular "escribiendo..." del bot
      setTimeout(() => {
        this.addBotMessage(this.getRandomBotResponse());
      }, 1000);
    }
  }

  private addBotMessage(message: string) {
    this.messages.push({
      sender: 'Seguridad',
      message: message,
      time: new Date()
    });
    this.scrollToBottom();
  }

  private getRandomBotResponse(): string {
    return this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
  }

  private async scrollToBottom() {
    try {
      await this.content.scrollToBottom(300);
    } catch (err) {
      console.error('Error al hacer scroll:', err);
    }
  }
}