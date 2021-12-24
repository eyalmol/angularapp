import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  postUrl: string = 'http://localhost:4300/message';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<JSON>(this.postUrl);
  }
}
