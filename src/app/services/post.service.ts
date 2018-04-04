import { Injectable } from '@angular/core';
import { Post } from '../post/post.model';
import {  } from '../timeline/timeline.component';


@Injectable()
export class PostService {

  constructor() { }

  posts = [];

  identifier = 3;

  getPosts () {
    return this.posts;
  }

  addLove (id) {
    for (let post of this.posts) {
      if (post.postId === id) {
        post.isLoved = true;
        post.postLove++;
      } else {

      }
    }
  }

  insertPost (post: Post) {
  //  console.log(post.postContent, post.postAuthor, post);
    this.posts.push(post);
    let index = this.posts.indexOf(post);
    this.posts[index].postId = this.identifier;
    this.identifier++;
    alert("Postagem Realizada!");
  }

  deletePost (id) {
    for (let post of this.posts) {
      if (post.postId === id) {
       let index = this.posts.indexOf(post);
       console.log(index);
       this.posts.splice(index, 1);
      }
    }
  }

}
