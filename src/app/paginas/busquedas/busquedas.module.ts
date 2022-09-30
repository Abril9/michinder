import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusquedasPage } from './busquedas.page';
import { ExploreContainerComponentModule } from '../../partes/explore-container/explore-container.module';

import { BusquedasPageRoutingModule } from './busquedas-routing.module';
import { DesarrollandoComponentModule } from '../../partes/desarrollando/desarrollando.module';
import { PubliComponentModule } from 'src/app/partes/publi/publi.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: BusquedasPage }]),

    DesarrollandoComponentModule,
    BusquedasPageRoutingModule
  ],
  declarations: [BusquedasPage]
})
export class BusquedasPageModule {}
