import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DesarrollandoComponent } from './desarrollando.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ DesarrollandoComponent],
  exports: [ DesarrollandoComponent ]
})
export class DesarrollandoComponentModule {}
