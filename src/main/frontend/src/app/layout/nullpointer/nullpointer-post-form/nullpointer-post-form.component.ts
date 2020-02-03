import { Component, OnInit } from '@angular/core';
import {NullpointerService} from "../../../services/nullpointer.service";

@Component({
  selector: 'app-nullpointer-post-form',
  templateUrl: './nullpointer-post-form.component.html',
  styleUrls: ['./nullpointer-post-form.component.scss']
})
export class NullpointerPostFormComponent implements OnInit {
  titleToAdd: string;
  contentToAdd: string;
  tags: string;

  constructor(private nullpointerService: NullpointerService) { }

  ngOnInit() {
  }

  addNewQuestion() {

    if(!!this.titleToAdd && !!this.contentToAdd && !!this.tags){
      this.nullpointerService.addNewNullpointerPost(
        this.titleToAdd, this.contentToAdd)
        .subscribe(result => {
        console.log(result);
      });
    }

  }
}
