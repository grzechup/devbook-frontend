import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IDialogEventArgs} from "igniteui-angular";
import {BoardService} from "../../../services/board.service";

@Component({
  selector: 'app-board-post-dialog',
  templateUrl: './board-post-dialog.component.html',
  styleUrls: ['./board-post-dialog.component.scss']
})
export class BoardPostDialogComponent implements OnInit {

  private content;

  @Output() submitedPost = new EventEmitter<boolean>();

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  onDialogOKSelected() {
    console.log(this.content);
    if(!!this.content){
      this.boardService.addNewBoardPost(this.content).subscribe(result => {
        console.log(result);
        this.submitedPost.emit(true);
      });
    }

  }
}
