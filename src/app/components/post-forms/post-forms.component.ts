import { PostService } from './../../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-forms',
  templateUrl: './post-forms.component.html',
  styleUrls: ['./post-forms.component.scss']
})
export class PostFormsComponent implements OnInit {
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    });
  }

  submitPost() {
    this.postService.addPost(this.postForm.value).subscribe(data => {
      this.postForm.reset();
    });
  }
}
