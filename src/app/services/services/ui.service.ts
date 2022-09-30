import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class UiService {

    private loading: any;
  constructor(public alertController: AlertController,
              public loadingController: LoadingController,
              public toastController: ToastController) { }

    async alerta(message: string, header: string = 'Comedor') {
        const alert = await this.alertController.create({
          header: header,
          message: message,
          buttons: ['Aceptar']
        });

        await alert.present();
    }


    async cargando(isCargando: boolean = true) {
        if (isCargando){
            this.loading = await this.loadingController.create({
                message: 'Espere por favor'
            });
            this.loading.present();
        }else {
            this.loading.dismiss();
        }
    }

    async toast(message: string, tipo: string = 'tertiary') {
        const toast = await this.toastController.create({
            message: message,
            duration: 0,
            showCloseButton: true,
            closeButtonText: 'Cerrar',
            color: tipo
        });
        toast.present();
    }
}
