import { TokenStorageService } from './_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit():void{

    //vérification de l'état de isLoggedIn à l'aide de TokenStorageService
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    //si la vérification est vrai, on obtient les roles des users
    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      /*// Et on définit la valeur pour l'indicateur showAdminBoard et showModeratorBoard
      ils contrôleront la barre façon dont la barre de navigation du modèle affiche ses éléments
      */
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLR_MODERATOR');

      this.username = user.username;
    }
  }
  /*
  le modèle App component a également un lien de bouton de deconnexion 
  qui appelle la méthode logout() et recharge la fénêtre.
  */
  logout():void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
}
