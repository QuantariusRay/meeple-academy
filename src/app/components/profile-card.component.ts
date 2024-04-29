import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-card',
  standalone: true,
  template: `
    <div class="card">
      <div class="image-container">
        <img [src]="person.image" alt="profile image">
      </div>
      <div class="person-profile">
        <span>{{ person.title }}</span>
        <span>{{ person.name }}</span>
      </div>
      <div class="bio-container">
        <p>
          {{ person.bio }}
        </p>
      </div>
    </div>
  `,
  styles: [`
    :host {
      @media (min-width: 600px) {
        max-width: 30rem;
      }
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 99px;
      object-position: center;
      object-fit: cover;
      image-rendering: auto;
    }

    .image-container {
      aspect-ratio: 1 / 1;
      overflow: hidden;
      width: 136px;
    }

    .person-profile {
      align-items: center;
      display: flex;
      flex: none;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 16px;
      height: min-content;
      justify-content: center;
      overflow: visible;
      padding: 0;
      position: relative;
      width: 100%;
    }
  `],
})
export class ProfileCardComponent {
  @Input() person!: any;
}
