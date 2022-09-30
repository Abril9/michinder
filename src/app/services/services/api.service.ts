import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
// import {environment} from '../../environments/environment';
// import {StorageService} from './storage.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import {NavController, Platform} from '@ionic/angular';
// import {UiService} from './ui.service';
// import {Datos,UrlResponse} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import { Datos } from 'src/app/interfaces/interfaces';
// import {ComprarResponse} from '../interfaces/comprar';
// import {InfoHomeResponse} from "../interfaces/InfoHome";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private datos: Datos
    public apikey: string = '8xon80CZGjM2i3j8qDC6y05MZYqJ96Ij'
    public url: string ='https://api.giphy.com/v1/gifs/search'
    public q: string ='cheeseburgers'
    private limit: 20
    
    private endpoint: string

    constructor(private http: HttpClient,

                // private storage: StorageService,
                // private jwtHelper: JwtHelperService,
                // private navCtrl: NavController,
                // private uiService: UiService,
                // private plt: Platform
                ) {

                   
        // if (environment.isLocal) { //entorno de desarrollo local
        //     this.endpoint = environment.endpoint;
        // } else {
        //     let url = document.URL.split('#')[0];
        //     url = url.split('/app/')[0];
        //     this.endpoint = url + '/api';
        //     console.log("endpoint: " + this.endpoint);
        // }
    }

    public conectar(){
        const self = this;
        return new Promise( resolve => {

            // const headers = new HttpHeaders({
            //      Accept: 'application/json',
            //      Authorization: 'Bearer '  + token
            //  });


            const params = new HttpParams().set('api_key',this.apikey)
                                           .set('q',this.q)     
                                           .set('limit','10');
            this.http.get(this.url,{params: params}).subscribe(
                response => {
                   console.log(response)
                }
            );
        });
    }


    // /*
    //  * Los restantes metodos del api se ejecutan llamando a esta funcion
    //  * la cual toma el token desde el storage y lo coloca en el header
    //  * (las diferentes url a las que se le pegan desde /api necesitan autenticarse con el token)
    //  */
    // private ejecutar<T>(method: string, query: string, params?: any): Observable<T>
    // {

    // 	console.log("Api.Service.ts.ejecutar : " + query.toLowerCase());
    	
    //     query = this.endpoint + query;

    //     const headers = new HttpHeaders({
    //         Accept: 'application/json',
    //         Authorization: 'Bearer '  + this.storage.jwt
    //     });

    //     let retorno: Observable<T>;

    //     switch (method.toLowerCase()) {
    //         case 'get':
    //             retorno = this.http.get<T>(query, { headers })
    //             break;
    //         case 'post':
    //             retorno = this.http.post<T>(query, params, { headers })
    //             break;
                
    //     }

    //     return retorno;
    // }

    // public comprar()
    // {
    //     return this.ejecutar<ComprarResponse>('get', '/comprar');
    // }

    // public pagar<T>(creditos: number, monto: number)
    // {
    //     const params = {
    //         'creditos' : parseInt(String(creditos)),
    //         'monto' : monto.toFixed(2)
    //     };
    //     return this.ejecutar<T>('post', '/comprar', params);
    // }

    // public cancelarOperacion<T>(idOperacion: number)
    // {
    //     const params = {
    //         'idOperacion' : idOperacion
    //     }
    //     return this.ejecutar<T>('post','/cancelarOperacion', params)
    // }

    // public getInfoHome()
    // {
    //   return this.ejecutar<InfoHomeResponse>('get', '/info_home');
    // }

    // public getTotalMovimientos()
    // {
    //     return this.ejecutar<InfoHomeResponse>('get', '/movimientos');
    // }

    // public getTotalConsumiciones()
    // {
    //     return this.ejecutar<InfoHomeResponse>('get', '/consumiciones');
    // }

    // public getUrlServicios()
    // {
    //     return this.ejecutar<UrlResponse>('get','/url_servicios');
    // }

    // public cerrarSesion()
    // {
    //     return this.ejecutar<any>('get','/cerrarSesion');
    // }

    // public getVersionAPP()
    // {
    //     return this.datos.versionAPP;
    // }

    // async logout()
    // {
    //     this.login(null);
    //     await this.storage.validaToken();
    // }

    // getDatos(): Datos
    // {
    //     return this.datos;
    // }

}
