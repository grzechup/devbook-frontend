import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BoardPost} from "../model/board-post.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class BoardService {
  private GET_BOARD_POSTS_FOR_USER: string = environment.restUrl + 'board/posts/';



  constructor(private http: HttpClient){
  }


  getBoardPostsForUser(username: string): Observable<BoardPost>{
    return this.http.get<BoardPost>(this.GET_BOARD_POSTS_FOR_USER + `${username}`);
  }


}
