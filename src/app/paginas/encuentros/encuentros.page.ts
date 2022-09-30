import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentros',
  templateUrl: './encuentros.page.html',
  styleUrls: ['./encuentros.page.scss'],
})
export class EncuentrosPage implements OnInit {



  paths : string[] = [
    
  '../../../assets/img/michipokemon.jpg',
  '../../../assets/img/gatosmichisignificado.jpg',
  '../../../assets/img/michicool.jpeg',
  '../../../assets/img/michicoqueto.jpg',
  '../../../assets/img/michicrok.jpeg',
  '../../../assets/img/michipokemon.jpg',
  '../../../assets/img/michisustado.jpg',
  '../../../assets/img/michiupa.jpg',
  '../../../assets/img/michicrok.jpg',
  '../../../assets/img/michipokemon.jpg',
  '../../../assets/img/michisustado.jpg',
  '../../../assets/img/michiupa.jpg'

]

  tipo = "28 Sep 2022"
  direccion : string = "Juan Dias De Soliz 6666, Santa Fe"
  fecha : string = "28 Sep 2022"
  descripcion : string = "Gatito muy bien cuidado y carinioso encontrado en la rioja. Tiene mucho hambre y caracteristicas de gatitos. Gatito muy bien cuidado y carinioso encontrado en la rioja. Tiene mucho hambre y caracteristicas de gatitos."



  constructor() { }

  ngOnInit() {
  }

  get cPaths(){
    return this.paths
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

}
