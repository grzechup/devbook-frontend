import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NanoblogPost} from "../model/nanoblog-post.model";
import {environment} from "../../environments/environment";
import {NullpointerPost} from "../model/nullpointer-post.model";
import {NullpointerComment} from "../model/nullpointer-comment.model";

@Injectable()
export class NullpointerService {
  private POST_NEW_NULLPOINTER_POST_URL: string = environment.restUrl + 'nullpointer';
  private GET_NULLPOINTER_POSTS_URL: string = environment.restUrl + 'nullpointer';
  private GET_NULLPOINTER_POST_URL: string = environment.restUrl + 'nullpointer';
  private POST_NEW_COMMENT_TO_NULLPOINTER_POST_URL: string = environment.restUrl + 'nullpointer/comment';
  //TODO: jakos poprawic te sciezki endpointow (zapisac gdzies w environment czy cos, poukladacac)
  private UPVOTE_NULLPOINTER_COMMENT_URL: string = environment.restUrl + 'nullpointer/comment/upvote';
  private DOWNVOTE_NULLPOINTER_COMMENT_URL: string = environment.restUrl + 'nullpointer/comment/downvote';
  private DELETE_NULLPOINTER_COMMENT_URL: string  = environment.restUrl + 'nullpointer/comment/delete';

  constructor(private http: HttpClient) {
  }

  public addNewNullpointerPost(title: string, content: string): Observable<NullpointerPost> {
    console.log(content);
    return this.http.post<NullpointerPost>(this.POST_NEW_NULLPOINTER_POST_URL, {title: title, content: content});
  }

  public getNullpointerPosts(): Observable<NullpointerPost[]> {
    return this.http.get<NullpointerPost[]>(this.GET_NULLPOINTER_POSTS_URL);
  }


  getNullpointerPost(id: number): Observable<NullpointerPost> {
    return this.http.get<NullpointerPost>(`${this.GET_NULLPOINTER_POST_URL}/${id}`);
  }

  addNewCommentToNullpointerPost(id: number, commentToAdd: string): Observable<NullpointerComment> {
    return this.http.post<NullpointerComment>(this.POST_NEW_COMMENT_TO_NULLPOINTER_POST_URL,
      {id: id, content: commentToAdd});
  }

  upvoteNullpointerComment(id: number): Observable<NullpointerComment> {
    console.log(id);
    return this.http.post<NullpointerComment>(this.UPVOTE_NULLPOINTER_COMMENT_URL, id);
  }

  downvoteNullpointerComment(id: number): Observable<NullpointerComment> {
    console.log(id);
    return this.http.post<NullpointerComment>(this.DOWNVOTE_NULLPOINTER_COMMENT_URL, id);
  }

  deleteNullpointerComment(id: number): Observable<boolean> {
    return this.http.post<boolean>(this.DELETE_NULLPOINTER_COMMENT_URL, id);
  }
}
