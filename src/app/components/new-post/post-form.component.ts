import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <form [formGroup]="postForm" (ngSubmit)="onSubmit()" class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" id="title" formControlName="title"
               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
      </div>
      
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
        <textarea id="content" formControlName="content" rows="8"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
      </div>
      
      <div>
        <label for="imageUrl" class="block text-sm font-medium text-gray-700">Image URL</label>
        <input type="text" id="imageUrl" formControlName="imageUrl"
               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
      </div>
      
      <div>
        <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
        <input type="text" id="author" formControlName="author"
               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
      </div>
      
      <div class="flex justify-end space-x-4">
        <a routerLink="/" class="px-4 py-2 text-gray-700 hover:text-gray-900">Cancel</a>
        <button type="submit" 
                [disabled]="!postForm.valid"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
          Publish Post
        </button>
      </div>
    </form>
  `
})
export class PostFormComponent {
  postForm: FormGroup;
  @Output() submitPost = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.submitPost.emit(this.postForm.value);
    }
  }
}