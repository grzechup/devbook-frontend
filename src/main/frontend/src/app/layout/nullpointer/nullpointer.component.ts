import { Component, OnInit } from '@angular/core';
import {NullpointerPost} from "../../model/nullpointer-post.model";
import {NullpointerService} from "../../services/nullpointer.service";

@Component({
  selector: 'app-nullpointer',
  templateUrl: './nullpointer.component.html',
  styleUrls: ['./nullpointer.component.scss']
})
export class NullpointerComponent implements OnInit {

  nullpointerPosts: NullpointerPost[];

  constructor(private nullpointerService: NullpointerService) { }

  ngOnInit() {
    this.nullpointerService.getNullpointerPosts().subscribe(result => {
      console.log(result);
      this.nullpointerPosts = result.sort((a,b) =>
        new Date(b.created).getTime() - new Date(a.created).getTime());
    })
  }

}
