import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { DesarrollandoComponentModule } from 'src/app/partes/desarrollando/desarrollando.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    DesarrollandoComponentModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
