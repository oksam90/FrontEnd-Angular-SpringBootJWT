import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//accès aux ressources protégées
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //accès à la page Home
  getContentPublic(): Observable<any>{
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  //accès à la page User
  getUserBoard(): Observable<any>{
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  //accès à la page Modérateur
  getModeratorBoard(): Observable<any>{
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  //accès à la page Admin
  getAdminBoard(): Observable<any>{
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }
}
