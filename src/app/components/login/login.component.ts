import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/providers/chats.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _cs : ChatsService
  ) { }

  ngOnInit(): void {
  }

  ingresar( proveedor: string ) { 
    console.log (proveedor );

    this._cs.login (proveedor );
    
  }

}

