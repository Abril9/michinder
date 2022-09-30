import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuentrosPageRoutingModule } from './encuentros-routing.module';

import { EncuentrosPage } from './encuentros.page';
import { DesarrollandoComponentModule } from '../../partes/desarrollando/desarrollando.module';
import { PubliComponentModule } from 'src/app/partes/publi/publi.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuentrosPageRoutingModule,

    DesarrollandoComponentModule,
    PubliComponentModule
  ],
  declarations: [EncuentrosPage]
})
export class EncuentrosPageModule {}
