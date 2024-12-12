import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { formatDate } from '../../utils/date.utils';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, DatePipe, CommonModule],
  template: `
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      @if (post.imageUrl) {
        <div class="relative pb-[60%] sm:pb-[56.25%]">
          <img [src]="post.imageUrl" 
               [alt]="post.title" 
               class="absolute inset-0 w-full h-full object-cover">
        </div>
      }
      <div class="p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{{ post.title }}</h2>
        <p class="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
          {{ post.content.substring(0, 150) }}...
        </p>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500">
          <span class="mb-1 sm:mb-0">By {{ post.author }}</span>
          <span>{{ formatDate(post.date) }}</span>
        </div>
        <a [routerLink]="['/post', post.id]" 
           class="mt-3 sm:mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm sm:text-base">
          Read more →
        </a>
      </div>
    </article>
  `
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post;
  protected formatDate = formatDate;
}