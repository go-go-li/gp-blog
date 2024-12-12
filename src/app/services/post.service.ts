import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      content: 'Angular is a powerful framework for building modern web applications...',
      author: 'John Doe',
      date: new Date('2024-01-15'),
      imageUrl: 'https://picsum.photos/seed/angular/800/600'
    },
    {
      id: 2,
      title: 'Modern Web Development',
      content: 'Learn about the latest trends in web development and how to implement them...',
      author: 'Jane Smith',
      date: new Date('2024-01-14'),
      imageUrl: 'https://picsum.photos/seed/webdev/800/600'
    },
    {
      id: 3,
      title: 'Building Responsive UIs',
      content: 'Discover techniques for creating beautiful and responsive user interfaces...',
      author: 'Mike Johnson',
      date: new Date('2024-01-13'),
      imageUrl: 'https://picsum.photos/seed/ui/800/600'
    }
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPost(id: number): Observable<Post | undefined> {
    return of(this.posts.find(post => post.id === id));
  }

  createPost(post: Omit<Post, 'id' | 'date'>): Observable<Post> {
    const newPost: Post = {
      ...post,
      id: this.posts.length + 1,
      date: new Date()
    };
    this.posts.unshift(newPost);
    return of(newPost);
  }
}