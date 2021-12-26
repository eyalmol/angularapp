import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application.json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class PostService {
  //define the url of our server
  postUrl: string = 'http://localhost:4300/message';
  constructor(private http: HttpClient) {}
  // GET request from the server in order to get our Post from the database
  getPosts(): Observable<any> {
    return this.http.get<JSON>(this.postUrl);
  }
  //POST request from the server in order to add the new post from the form to the database
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post);
  }
}
