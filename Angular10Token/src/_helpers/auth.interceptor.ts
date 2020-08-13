import { TokenStorageService } from './../app/_services/token-storage.service';
import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor (private token: TokenStorageService){}

    /*
    la méthode intercept() va inspecter et transformer les requêtes HTTP avant qu'elles soient envoyées au serveur
    intercet() recupère l'objet HTTPRequest, le modifie et le transmet à la méthode handle() 
    de l'objet HTTPRequest en un <HttpEvents> observable
    */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let authReq = req;
        const token = this.token.getToken();
        if(token != null){
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)}); //ajout dans l'en-tête autorization avec le préfixe Bearer au jeton
        }
        /*
        next: l'objet HttpHandler représente le prochain intercepteur dans la chaine d'intercepteurs.
        Le dernier <<suivant>> de la chaine est le Angular HttpClient
        */
        return next.handle(authReq);
    }
}
export const authInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
];