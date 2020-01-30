import {Component, Input, OnInit} from '@angular/core';
import {BoardPost} from "../../../model/board-post.model";
import {NanoblogPost} from "../../../model/nanoblog-post.model";
import {User} from "../../../model/user.model";
import {TokenStorageService} from "../../../security/token-storage.service";

@Component({
  selector: 'app-nanoblog-card',
  templateUrl: './nanoblog-card.component.html',
  styleUrls: ['./nanoblog-card.component.scss']
})
export class NanoblogCardComponent implements OnInit {

  @Input()
  private nanoblogPost: NanoblogPost;
  private commentToAdd: string;
  private loggedUsername: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.loggedUsername = this.tokenStorageService.getLoggedUsername();
  }

  commentNanoblogPost(id: number) {

  }

  likeNanoblogPost(id: number) {

  }

  unlikeNanoblogPost(id: number) {

  }

  getUsersLiked() {

  }

  isLikedByUser(likes: User[]): boolean {
    return !!likes.find(u => u.username === this.loggedUsername);
  }
}
