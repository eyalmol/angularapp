import { Component, OnInit } from '@angular/core';
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
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
