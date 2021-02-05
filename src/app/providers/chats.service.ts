import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(
    private afs : AngularFirestore
  ) {

  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats');

    return this.itemsCollection.valueChanges().pipe(
      map( (mensajes: Mensaje[]) => {
        console.log(mensajes);
        this.chats = mensajes;
      })
    )
    
  }

  agregarMensaje( texto:string ) {
    // todo Falta el uid del usuario

    let mensaje:Mensaje = {
      nombre: 'Fernando Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    this.itemsCollection.add( mensaje )
  }
}
