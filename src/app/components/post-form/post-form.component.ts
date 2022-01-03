import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import { Post } from 'src/app/models/Post';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  post: Post | undefined;
  //define temp post argument so we can act when the user submit/cancel his request
  tempPost: Post = {
    title: '',
    newsText: '',
    likes: 0,
  };

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  //sendign the new post to the sever and to the DB using the post service
  addPost(title: string, newsText: string, form: NgForm) {
    //check if the new post has all it's mendatory properties
    if (!title || !newsText) {
      alert('Please add post');
    } else {
      this.postService
        .savePost({ title: title, newsText: newsText })
        .subscribe((post: any) => {
          //giving an event from the form component and sending the new post
          this.newPost.emit(post);
          this.tempPost.title = '';
          this.tempPost.newsText = '';
        });
    }
  }
  //when the user will click on the cancel post btn the title and the newText fields will
  //empty
  cancelPost() {
    this.tempPost.title = '';
    this.tempPost.newsText = '';
  }
}
