import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostFormComponent } from './post-form.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [PostFormComponent],
  template: `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold mb-8">Create New Post</h1>
      <app-post-form (submitPost)="onSubmit($event)" />
    </div>
  `
})
export class NewPostComponent {
  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  onSubmit(formData: any) {
    this.postService.createPost(formData).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}