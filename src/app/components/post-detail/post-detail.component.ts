import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { PostService } from '../../services/post.service';
import { PageContainerComponent } from '../shared/page-container.component';
import { formatDate } from '../../utils/date.utils';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, AsyncPipe, PageContainerComponent],
  template: `
    <app-page-container>
      @if (post$ | async; as post) {
        <article class="bg-white rounded-lg shadow-lg overflow-hidden">
          @if (post.imageUrl) {
            <div class="relative pb-[60%] sm:pb-[50%] lg:pb-[40%]">
              <img [src]="post.imageUrl" 
                   [alt]="post.title" 
                   class="absolute inset-0 w-full h-full object-cover">
            </div>
          }
          <div class="p-4 sm:p-6 lg:p-8">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{{ post.title }}</h1>
            <div class="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              <span class="mb-1 sm:mb-0 sm:mr-4">By {{ post.author }}</span>
              <span>{{ formatDate(post.date) }}</span>
            </div>
            <div class="prose prose-sm sm:prose lg:prose-lg max-w-none">
              {{ post.content }}
            </div>
            <a routerLink="/" 
               class="mt-6 sm:mt-8 inline-block text-blue-600 hover:text-blue-800">
              ← Back to Posts
            </a>
          </div>
        </article>
      } @else {
        <p class="text-center text-gray-600">Post not found</p>
      }
    </app-page-container>
  `
})
export class PostDetailComponent {
  post$ = this.route.params.pipe(
    switchMap(params => this.postService.getPost(Number(params['id'])))
  );
  protected formatDate = formatDate;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
}