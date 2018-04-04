import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirmPostLove(post) {
    console.log ("Amei:", post.postAuthor);
  }

}
