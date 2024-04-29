import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import EventCardComponent from '../../components/event-card.component';
import { events } from '../../../assets/events';

@Component({
  selector: 'events-page',
  standalone: true,
  template: `
    <section>
      <div class="header-container">
        <div class="icon-container">
          <fa-icon [icon]="bullhorn" size="lg"></fa-icon>
        </div>
        <h1>Events</h1>
      </div>
    </section>
    <section>
      <div class="event-cards">
        @for (gameEvent of events; track $index) {
          <event-card [gameEvent]="gameEvent"></event-card>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 80px;

        @media (max-width: 599px) {
          padding: 80px 24px;
        }
      }

      .header-container {
        display: flex;
        gap: 24px;
        place-content: center;
        align-items: center;
      }

      .icon-container {
        place-content: center;
        align-items: center;
        display: flex;
        flex: 0 0 auto;
        flex-flow: row;
        gap: 10px;
        height: 48px;
        overflow: hidden;
        padding: 8px;
        position: relative;
        width: 48px;
        will-change: transform;
        border-radius: 99px;
        background-color: var(--icon-background-color);
      }

      .event-cards {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `,
  ],
  imports: [
    FaIconComponent,
    EventCardComponent
  ]
})
export default class EventsPage {
  bullhorn = faBullhorn;
  events = events;
}
