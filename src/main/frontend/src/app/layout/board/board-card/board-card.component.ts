import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../../services/board.service";

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

}
