import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.component.html',
  styleUrls: ['./publi.component.scss'],
 
})
export class PubliComponent implements OnInit {
  
  @Input() tipo = "28 Sep 2022"
  @Input() pathToImg : string //= "../../../assets/img/gatosmichisignificado.jpg"
  @Input() direccion : string = "La Rioja,6666 Santa Fe"
  @Input() fecha : string = "28 Sep 2022"
  @Input() descripcion : string //= "Gatito muy bien cuidado y carinioso encontrado en la rioja. Tiene mucho hambre y caracteristicas de gatitos. Gatito muy bien cuidado y carinioso encontrado en la rioja. Tiene mucho hambre y caracteristicas de gatitos."

  constructor() { }

  ngOnInit() {}

  get path(){
    return this.pathToImg
  }

  get Descripcion(){
    return this.descripcion
  }

  get Direccion(){
    return this.direccion
  }

  get Fecha(){
    return this.fecha
  }

  get Tipo(){
    
    //TODO HACER TIPOS.ENCUENTRO Y TIPO.BUSQUEDA ESTATICO
    return "Encontrado"
  }
}
