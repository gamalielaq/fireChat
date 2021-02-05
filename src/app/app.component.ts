import { Component } from '@angular/core';

// importaciones para angularfire
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatsService } from './providers/chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fireChat';

  chats$: Observable<any[]>;
  constructor(
    firestore: AngularFirestore,
    public _cs : ChatsService
    ) {
    this.chats$ = firestore.collection('chats').valueChanges();
  }

}
