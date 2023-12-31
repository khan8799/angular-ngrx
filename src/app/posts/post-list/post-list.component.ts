import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/post.selector';
import { deletePost } from '../state/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDelete(id: number) {
    console.log(id);
    this.store.dispatch(deletePost({id}))
  }
}
