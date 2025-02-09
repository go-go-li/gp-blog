import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <button 
      (click)="toggleMenu()" 
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <!-- Icon when menu is closed -->
      <svg 
        [class.hidden]="isOpen" 
        [class.block]="!isOpen" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <!-- Icon when menu is open -->
      <svg 
        [class.hidden]="!isOpen" 
        [class.block]="isOpen" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile menu panel -->
    @if (isOpen) {
      <div class="sm:hidden absolute top-16 right-0 left-0 bg-white shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a routerLink="/" 
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
             (click)="closeMenu()">
            Home
          </a>
          <a routerLink="/new" 
             class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
             (click)="closeMenu()">
            New Post
          </a>
        </div>
      </div>
    }
  `
})
export class MobileMenuComponent {
  isOpen = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }
}