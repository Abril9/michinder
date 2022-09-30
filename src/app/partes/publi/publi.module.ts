import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PubliComponent } from './publi.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ PubliComponent],
  exports: [ PubliComponent]
})
export class PubliComponentModule {}
