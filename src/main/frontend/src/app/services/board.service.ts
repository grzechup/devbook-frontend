import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BoardPost} from "../model/board-post.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {BoardComment} from "../model/board-comment.model";

@Injectable()
export class BoardService {
  private GET_BOARD_POSTS_FOR_USER: string = environment.restUrl + 'board/posts/';
  private POST_NEW_BOARD_POST_URL: string = environment.restUrl + 'board'
  private LIKE_BOARD_POST_URL: string = environment.restUrl + 'board/like';
  private UNLIKE_BOARD_POST_URL: string = environment.restUrl + 'board/unlike';
  private COMMENT_BOARD_POST_URL: string = environment.restUrl + 'board/comment';

  constructor(private http: HttpClient){
  }

  getBoardPostsForUser(): Observable<BoardPost[]>{
    return this.http.get<BoardPost[]>(this.GET_BOARD_POSTS_FOR_USER);
  }

  addNewBoardPost(content: string) {
    return this.http.post(this.POST_NEW_BOARD_POST_URL, content);
  }

  likeBoardPost(id: number): Observable<BoardPost> {
    return this.http.post<BoardPost>(this.LIKE_BOARD_POST_URL, id);
  }

  unlikeBoardPost(id: number): Observable<BoardPost> {
    return this.http.post<BoardPost>(this.UNLIKE_BOARD_POST_URL, id);
  }

  commentBoardPost(id: number, content: string): Observable<BoardComment> {
    return this.http.post<BoardComment>(this.COMMENT_BOARD_POST_URL,{id: id, content: content});
  }
}
