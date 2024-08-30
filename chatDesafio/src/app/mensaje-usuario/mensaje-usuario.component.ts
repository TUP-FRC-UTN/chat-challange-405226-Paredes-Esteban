import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Output() mensajeToSave = new EventEmitter<Mensaje>();
  @Input() currentUser:string = "chancha";

  txtMensaje:string = "";
  guardarMensaje(evento:Event){
    let auxMensaje: Mensaje={user:this.currentUser.valueOf(),message:this.txtMensaje};
    this.mensajeToSave.emit(auxMensaje);
  }
}