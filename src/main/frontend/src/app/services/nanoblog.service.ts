import {NanoblogPost} from "../model/nanoblog-post.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class NanoblogService {

  private POST_NEW_NANOBLOG_POST_URL: string = environment.restUrl+ 'nanoblog';
  private GET_NANOBLOG_POSTS_URL: string = environment.restUrl + 'nanoblog';

  constructor(private http: HttpClient){}

  public addNewNanoblogPost(content: string): Observable<NanoblogPost>{
    console.log(content);
    return this.http.post<NanoblogPost>(this.POST_NEW_NANOBLOG_POST_URL, content);
  }

  public getNanoblogPosts(): Observable<NanoblogPost[]>{
    return this.http.get<NanoblogPost[]>(this.GET_NANOBLOG_POSTS_URL);
  }

}
