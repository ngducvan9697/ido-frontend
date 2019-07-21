import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.AllPost();
  }

  AllPost() {
    this.postService.getAllPost().subscribe(data => {
      this.posts = data.posts;
    });
  }
}
