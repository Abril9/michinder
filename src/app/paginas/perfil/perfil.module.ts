import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './perfil.page';

import { PerfilRoutingModule } from './perfil-routing.module';
import { ExploreContainerComponentModule } from 'src/app/partes/explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PerfilRoutingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
