import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './../components/toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../services/token.service';
import { SideComponent } from '../components/side/side.component';
import { PostFormsComponent } from '../components/post-forms/post-forms.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostService } from '../services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StreamsComponent, ToolbarComponent, SideComponent, PostFormsComponent, PostsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [StreamsComponent, ToolbarComponent],
  providers: [TokenService, PostService]
})
export class StreamsModule {}
