import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuComponent } from './mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MobileMenuComponent],
  template: `
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="text-xl sm:text-2xl font-bold text-gray-900">Dusty & FeeBlog</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex items-center sm:hidden">
            <app-mobile-menu />
          </div>

          <!-- Desktop menu -->
          <div class="hidden sm:flex sm:items-center sm:space-x-4">
            <a routerLink="/" class="text-gray-700 hover:text-gray-900">Home</a>
            <a routerLink="/new" 
               class="bg-blue-600 text-white px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-md hover:bg-blue-700">
              New Post
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}