import { Component, OnInit } from '@angular/core';
import {BoardPost} from "../../model/board-post.model";
import {NanoblogPost} from "../../model/nanoblog-post.model";
import {NanoblogService} from "../../services/nanoblog.service";

@Component({
  selector: 'app-nanoblog',
  templateUrl: './nanoblog.component.html',
  styleUrls: ['./nanoblog.component.scss']
})
export class NanoblogComponent implements OnInit {

  nanoblogPosts: NanoblogPost[];
  newPostContent: string;



  constructor(private nanoblogService: NanoblogService) { }

  ngOnInit() {
    this.nanoblogService.getNanoblogPosts().subscribe(result => {
      console.log(result);
      this.nanoblogPosts = result.sort((a,b) =>
        new Date(b.created).getTime() - new Date(a.created).getTime())
    })
  }

  onDialogOKSelected() {

  }
}
