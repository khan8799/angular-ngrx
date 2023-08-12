import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/post.action';
import { ActivatedRoute } from '@angular/router';
import { getPostById } from '../state/post.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  productId: string;
  post: Post;
  postSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getProductById();
    });
    this.initializeForm();
  }

  ngOnDestroy(): void {
    if (this.postSubscription) this.postSubscription.unsubscribe();
  }

  getProductById() {
    this.postSubscription = this.store.select(getPostById, { id: this.productId}).subscribe(post => {
      if (!post) return;
      
      this.post = post;
      this.initializeForm();
    })
  }

  initializeForm(): void {
    this.editForm = this.fb.group({
      title: [this.post.title],
      description: [this.post.description]
    });
  }

  onSubmit(): void {
    const post: Post = {
      id: this.post.id,
      title: this.editForm.value.title,
      description: this.editForm.value.description
    }
    this.editForm.reset();
    this.store.dispatch(updatePost({post}))
  }
}
