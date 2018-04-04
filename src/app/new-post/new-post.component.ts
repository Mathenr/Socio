import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit() {
    
  }

  @Output() newPost = new EventEmitter();

  postContent:string;
  postAuthor:string;

  onSubmit (event) {
    event.preventDefault();
    this.postService.insertPost((new Post (this.postAuthor, this.postContent, 0, false)));
  }
}
