import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ng-content></ng-content>
    </div>
  `
})
export class PageContainerComponent {}