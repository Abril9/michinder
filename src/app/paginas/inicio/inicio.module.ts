import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { ExploreContainerComponentModule } from 'src/app/partes/explore-container/explore-container.module';
import { DesarrollandoComponentModule } from '../../partes/desarrollando/desarrollando.module';
import { PubliComponentModule } from 'src/app/partes/publi/publi.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,

    DesarrollandoComponentModule,
    PubliComponentModule,
    InicioPageRoutingModule

  ],
  declarations: [
   InicioPage 
  ]
})
export class InicioPageModule {}
