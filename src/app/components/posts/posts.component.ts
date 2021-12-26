import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    //observe the getPost function that we defined in the post service and set the method
    //to be act when the value has been changed
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
  //when we get the event from the post-form component we want  add it to the posts list component
  onNewPost(post: Post) {
    this.posts?.unshift(post);
  }
}
