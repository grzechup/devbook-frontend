import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../services/board.service";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(result => {
      this.boardService.getBoardPostsForUser(result.username).subscribe(result => console.log(result));
    });



  }

}
