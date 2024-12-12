import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { PostService } from '../../services/post.service';
import { PageContainerComponent } from '../shared/page-container.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostCardComponent, AsyncPipe, CommonModule, PageContainerComponent],
  template: `
    <app-page-container>
      <h1 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Latest Posts</h1>
      <div class="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        @for (post of posts$ | async; track post.id) {
          <app-post-card [post]="post" />
        }
      </div>
    </app-page-container>
  `
})
export class PostListComponent {
  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) {}
}