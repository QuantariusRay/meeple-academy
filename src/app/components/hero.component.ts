import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <h1>Empowering communities through the joy of tabletop gaming.</h1>
    <a class="button" [routerLink]="['/donate']">Donate</a>
    <div class="image-container">
      <img src="/hero-image.jpg" alt="hero-image" class="image">
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      padding: 80px;
      gap: 40px;

      @media (max-width: 599px) {
        padding: 80px 24px;
      }

      .image-container {
        border-radius: 32px;
        opacity: 1;
        height: var(--aspect-ratio-supported, 1280px);
        width: 100%;

        @media (max-width: 599px) {
          aspect-ratio: .5625 / 1;
        }
      }

      .image {
        border-radius: 32px;
        display: block;
        object-fit: cover;
        background-color: rgba(0, 0, 0, 0);
        object-position: 50% 50%;

        @media (max-width: 599px) {
          width: 100%;
          height: 100%;
        }
      }
    }
  `],
  imports: [
    RouterLink
  ]
})
export class HeroComponent {}
