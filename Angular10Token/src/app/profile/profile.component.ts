import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

/*
ce composant obtient l'utilisateur actuel du stockage à l'aide de TokenStorageService 
et affiche les informations (nom d'utilisateur, jeton, e-mail, rôles).
*/
export class ProfileComponent implements OnInit {

  currentUser : any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {

    this.currentUser = this.token.getUser();

  }

}
