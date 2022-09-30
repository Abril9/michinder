import { Component, OnInit } from '@angular/core';
import { Contacto,Usuario,Persona } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage implements OnInit {
 
  public contacto : Contacto = {
    email       :  'email@ejemplo'
  };
  
  public usuario : Usuario = {
    usuario     : 'Mariza99',
    password    : 'Mariza99',
    contacto    : this.contacto,
    avatarPath  : "../../assets/img/avatar.jpeg",
    fechaCierre : null,
    fechaLogin  : new Date(),
  };


  public persona : Persona = {
    usuario   : this.usuario,
    nombre    : 'Mariza',
    apellido  : 'Alturra',
  };


  constructor() {}

  ngOnInit(): void {

    
    this.persona.nombre = 'Mari'
    this.persona.apellido = ' pizzat'
    this.persona.usuario = this.usuario
    this.persona.direccion = 'alverdi 10099'

    console.log('construido ....')
    console.log(this.persona)

  }

  get personaemail(){
    return this.usuario.contacto.email
  }
  get personatwitter(){
    return true
  }
  get personainstagram(){
    return true
  }
  get personafacebook(){
    return true
  }

  get personatelefono(){
    return this.usuario.contacto.telefono
  }

  

}
