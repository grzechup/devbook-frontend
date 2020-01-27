import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../services/board.service";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {BoardPost} from "../../model/board-post.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private boardPosts: BoardPost[] = []

  constructor(private boardService: BoardService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.boardService.getBoardPostsForUser().subscribe(result => {
        this.boardPosts = result.sort((a,b) =>
          new Date(b.created).getTime() - new Date(a.created).getTime())
    });

  }

}
