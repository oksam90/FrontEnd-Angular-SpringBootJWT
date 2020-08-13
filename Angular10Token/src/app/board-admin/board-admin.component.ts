import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content : string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAdminBoard().subscribe(
      data =>{
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
      );
  }

}
