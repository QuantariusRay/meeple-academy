import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import FooterComponent from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
  ],
  template: `
    <router-outlet/>
    <app-footer/>
  `,
  styles: [
    `
      :host {
        flex: 1;
      }
    `,
  ],
})
export class AppComponent {}
