import {Component, Input, OnInit} from '@angular/core';
import {BoardService} from "../../../services/board.service";
import {BoardPost} from "../../../model/board-post.model";
import {UserService} from "../../../services/user.service";
import {TokenStorageService} from "../../../security/token-storage.service";
import {User} from "../../../model/user.model";

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {

  @Input()
  private boardPost: BoardPost;

  private loggedUsername: string;
  commentToAdd: string;

  constructor(private boardService: BoardService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    console.log(this.boardPost);
    this.loggedUsername = this.tokenStorageService.getLoggedUsername();
  }

  likeBoardPost(id: number) {
    this.boardService.likeBoardPost(id).subscribe(result => this.boardPost = result);
  }

  unlikeBoardPost(id: number) {
    this.boardService.unlikeBoardPost(id).subscribe(result => this.boardPost = result);
  }

  isLikedByUser(likes: User[]): boolean {
    console.log(likes);
    return !!likes.find(u => u.username === this.loggedUsername);
  }

  getUsersLiked(): string {
    return this.boardPost.likes.map(b => b.username).join(', ');
  }

  commentBoardPost(id: number) {
    return this.boardService.commentBoardPost(id, this.commentToAdd).subscribe(result => {
      console.log(result);
      this.boardPost.boardComments.push(result);
      this.commentToAdd = '';
    });
  }
}
