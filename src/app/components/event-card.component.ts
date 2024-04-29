import { Component, Input } from '@angular/core';
import { GameEvent } from '../../assets/events';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'event-card',
  standalone: true,
  template: `
    <div class="event-card">
      <div class="event-container">
        <a class="event-link" [routerLink]="['/events', gameEvent.eventId]">
          <div>
            <div>
              <img [src]="gameEvent.eventImage" [alt]="gameEvent.altDesc">
            </div>
          </div>
          <div class="event-details">
            <div class="text-wrapper">
              <h2>{{ gameEvent.eventName }}</h2>
            </div>
            <div class="text-wrapper">
              <p>{{ gameEvent.eventDate }}</p>
            </div>
            <div class="text-wrapper">
              <p>{{ gameEvent.eventTime }}</p>
            </div>
            <div class="text-wrapper">
              <p class="offset">
                Event Details <fa-icon [icon]="arrow" class="offset"></fa-icon>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .event-card {
        flex: 0 0 auto;
        height: auto;
        position: relative;
        transform: perspective(1200px);
        width: 100%;
      }

      .event-container {
        display: contents;
      }

      .event-link {
        background-color: rgba(37, 41, 45, 0);
        width: 100%;
        border-radius: 16px;
        opacity: 1;
        flex-direction: column;
        place-content: center flex-start;
        align-items: center;
        display: flex;
        flex-flow: wrap;
        gap: 0;
        height: min-content;
        padding: 0;
        position: relative;
        text-decoration: none;
      }

      .event-details {
        flex: 0 0 auto;
        padding: 24px 0;
        width: 100%;
        place-content: flex-start;
        align-items: flex-start;
        display: flex;
        flex-flow: column;
        gap: 10px;
        height: min-content;
        min-width: 200px;
        position: relative;
      }

      .text-wrapper {
        flex: 0 0 auto;
        height: auto;
        position: relative;
        white-space: pre-wrap;
        width: 100%;
        word-break: break-word;
        overflow-wrap: break-word;
        outline: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-shrink: 0;
        --framer-paragraph-spacing: 0px;
        transform: none;
        opacity: 1;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-position: center center;
        object-fit: cover;
        image-rendering: auto;
      }

      p {
        margin: 0;
      }
    `,
  ],
  imports: [
    FaIconComponent,
    RouterLink
  ]
})
export default class EventCardComponent {
  @Input() gameEvent!: GameEvent;

  arrow = faArrowRight;
}
