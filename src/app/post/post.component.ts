import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() posts: Post[];

  @Output() sendLove = new EventEmitter();


  giveLove: Post;

  addLove(post) {

    if (post.isLoved == true) {

    } else {
    post.isLoved = true;
    event.preventDefault();
    post.postLove++;
    this.sendLove.emit(post);
    }
  }

}
