import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interface/mensaje.interface';
import { ChatsService } from '../../providers/chats.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  constructor(
    public _cs : ChatsService
  ) {
      this._cs.cargarMensajes().subscribe();
   }

  ngOnInit(): void {
  }


  enviarMensaje() {
    this.mensaje
  }
}
