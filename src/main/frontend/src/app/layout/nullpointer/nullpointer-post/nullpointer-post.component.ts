import {Component, OnInit} from '@angular/core';
import {NullpointerService} from "../../../services/nullpointer.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {NullpointerPost} from "../../../model/nullpointer-post.model";
import {User} from "../../../model/user.model";
import {TokenStorageService} from "../../../security/token-storage.service";

@Component({
  selector: 'app-nullpointer-post',
  templateUrl: './nullpointer-post.component.html',
  styleUrls: ['./nullpointer-post.component.scss']
})
export class NullpointerPostComponent implements OnInit {

  private routeSub: Subscription;
  private nullpointerPost: NullpointerPost;
  private commentToAdd: string;
  private loggedUsername: string;

  constructor(private nullpointerService: NullpointerService,
              private router: ActivatedRoute,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.routeSub = this.router.paramMap.pipe(
      map(params => parseInt(params.get('id'))),
      switchMap(id => this.nullpointerService.getNullpointerPost(id)))
      .subscribe(result => {
        console.log(result);
        this.nullpointerPost = result;
      });
    this.loggedUsername = this.tokenStorageService.getLoggedUsername();
  }

  commentNullpointerPost(id: number) {
    if (!!this.commentToAdd) {
      this.nullpointerService.addNewCommentToNullpointerPost(id, this.commentToAdd).subscribe(result => {
        console.log(result);
        this.nullpointerPost.nullpointerComments.push(result);
      })
    }
  }

  countPoints(pointsUp: User[], pointsDown: User[]) {
    return pointsUp.length - pointsDown.length;
  }

  upvoteNullpointerComment(id: number) {
    this.nullpointerService.upvoteNullpointerComment(id).subscribe(result => {
      this.replaceNullpointerCommentFromResult(id, result);
    })
  }

  downvoteNullpointerComment(id: number) {
    this.nullpointerService.downvoteNullpointerComment(id).subscribe(result => {
      this.replaceNullpointerCommentFromResult(id, result);
    })
  }

  isNullpointerCommentUpvotedByUser(id: number) {
    return !!this.nullpointerPost.nullpointerComments
      .find(c => c.id === id).pointsUp
      .find(p => p.username === this.loggedUsername);
  }

  isNullpointerCommentDownvotedByUser(id: number) {
    return !!this.nullpointerPost.nullpointerComments
      .find(c => c.id === id).pointsDown
      .find(p => p.username === this.loggedUsername);
  }

  isNullpointerCommentWrittenByUser(id: number) {
    return this.nullpointerPost.nullpointerComments
      .find(c => c.id === id).user.username == this.loggedUsername;
  }

  deleteNullpointerComment(id: number) {
    this.nullpointerService.deleteNullpointerComment(id).subscribe(result =>{
      if(result){
        //this.data = this.data.filter(item => item !== data_item);
        this.nullpointerPost.nullpointerComments = this.nullpointerPost.nullpointerComments
          .filter(c => c !==  this.nullpointerPost.nullpointerComments.find(c => c.id === id));
      }
    });
  }

  private replaceNullpointerCommentFromResult(id, result) {
    let updatedComment = this.nullpointerPost.nullpointerComments.find(c => c.id === id);
    let index = this.nullpointerPost.nullpointerComments.indexOf(updatedComment);
    this.nullpointerPost.nullpointerComments[index] = result;
  }

}
