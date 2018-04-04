import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor (private postService: PostService) { } // por que private?

  @Input() posts: Post[]; // por que só ta funcionando com input?

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
 
  @Output() sendLove = new EventEmitter();

  giveLove: Post;

  addLove(post: Post) {
    if(post.isLoved == true) {

    } else {
        this.postService.addLove(post.postId);
        this.sendLove.emit(post);
      }
  }

  deletePost(post: Post) {
    this.postService.deletePost(post.postId);
  }

}
