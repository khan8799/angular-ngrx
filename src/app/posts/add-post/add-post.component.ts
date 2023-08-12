import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      title: [],
      description: []
    });
  }

  onSubmit(): void {
    const post: Post = {
      id: null,
      title: this.addForm.value.title,
      description: this.addForm.value.description
    }
    this.addForm.reset();
    this.store.dispatch(addPost({post}))
  }
}
