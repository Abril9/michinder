import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['tab1.page.scss']
})
export class InicioPage implements OnInit{




  constructor(private apiGiphy : ApiService) {


  }

  ngOnInit(): void {
      this.apiGiphy.conectar()
  }
  

}
