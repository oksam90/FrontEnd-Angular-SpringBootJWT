import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.getModeratorBoard().subscribe (
      data => {
        
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
      );
    }
}
