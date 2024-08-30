import { Component, Type } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  listaMensajes: Mensaje[] = [];

  user1:string = "Pepe";
  user2:string = "Maria";

  recibirMensaje(mensaje:Mensaje){
    this.listaMensajes.push(mensaje);
  }
}

