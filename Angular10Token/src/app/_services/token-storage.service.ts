import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //supprime la sessionStorage à la déconnexion
  signOut(): void{
    window.sessionStorage.clear();
  }
  
  //Suppression et enrégitre le token
  public saveToken (token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  //Obetenir le token 
  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  //Suppression et enrégistement des info du user
  public saveUser(user): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //obtenir les information du user
  public getUser():any{
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
