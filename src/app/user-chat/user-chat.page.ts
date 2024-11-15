import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: string;
  message: string;
  time: Date;
}

@Component({
  standalone: true,
  selector: 'app-user-chat',
  templateUrl: './user-chat.page.html',
  styleUrls: ['./user-chat.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UserChatPage implements OnInit {
  message: string = '';
  messages: Message[] = [];
  private botResponses = [
    "Entiendo tu emergencia, ¿podrías proporcionarme más detalles?",
    "Mantén la calma, estamos aquí para ayudarte.",
    "El equipo de seguridad ha sido notificado de tu situación.",
    "¿Te encuentras en un lugar seguro en este momento?",
    "Personal de ayuda está en camino.",
    "Por favor, mantente en línea mientras coordinamos la asistencia."
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Mensaje inicial del bot
    this.addMessage('Bot', '¡Hola! Soy tu asistente de emergencias. ¿En qué puedo ayudarte?');
    
    // Suscribirse a mensajes del servicio
    this.chatService.getMessages().subscribe((msgs) => {
      // Aquí podrías sincronizar con el chat de seguridad si es necesario
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      // Agregar mensaje del usuario
      this.addMessage('Usuario', this.message);
      
      // Simular envío al servicio
      this.chatService.sendMessage('usuario', this.message);
      
      // Limpiar input
      this.message = '';
      
      // Simular respuesta del bot
      setTimeout(() => {
        const randomResponse = this.botResponses[Math.floor(Math.random() * this.botResponses.length)];
        this.addMessage('Bot', randomResponse);
      }, 1000);
    }
  }

  private addMessage(sender: string, message: string) {
    this.messages.push({
      sender,
      message,
      time: new Date()
    });
  }
}