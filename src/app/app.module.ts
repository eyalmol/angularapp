import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { PostFormComponent } from './components/post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
