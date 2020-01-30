import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NanoblogService} from "../../../services/nanoblog.service";

@Component({
  selector: 'app-nanoblog-post-dialog-button',
  templateUrl: './nanoblog-post-dialog-button.component.html',
  styleUrls: ['./nanoblog-post-dialog-button.component.scss']
})
export class NanoblogPostDialogButtonComponent implements OnInit {

  newPostContent: string;
  @Output() submitedPost = new EventEmitter<boolean>();

  constructor(private nanoblogService: NanoblogService) { }

  ngOnInit() {
  }

  onDialogOKSelected() {
    console.log(this.newPostContent);
    if(!!this.newPostContent){
      this.nanoblogService.addNewNanoblogPost(this.newPostContent).subscribe(result => {
        console.log(result);
        this.submitedPost.emit(true);
      });
    }
  }
}
