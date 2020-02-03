import {Component, Input, OnInit} from '@angular/core';
import {NullpointerPost} from "../../../model/nullpointer-post.model";

@Component({
  selector: 'app-nullpointer-post-card',
  templateUrl: './nullpointer-post-card.component.html',
  styleUrls: ['./nullpointer-post-card.component.scss']
})
export class NullpointerPostCardComponent implements OnInit {

  @Input()
  private nullpointerPost: NullpointerPost;

  constructor() { }

  ngOnInit() {
  }

}
