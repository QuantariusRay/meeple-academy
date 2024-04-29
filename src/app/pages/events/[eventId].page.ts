import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { events, GameEvent } from '../../../assets/events';
import { faArrowLeft, faCalendar, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'event-details',
  standalone: true,
  template: `
    <section class="page-container">
      <div class="content-wrapper">
        <div class="image-container">
          <div class="image-wrapper">
            <img [src]="selectedEvent?.eventImage"
                 [alt]="selectedEvent?.altDesc"
                 class="image">
          </div>
        </div>
      </div>
      <div class="details-wrapper">
        <div class="details-container">
          <div class="info-block">
            <div>
              <h1>{{ selectedEvent.eventName }}</h1>
            </div>
            <div>
              <p>{{ selectedEvent.eventDescription }}</p>
            </div>
            <h2>About the Event</h2>
            <p>
              {{ selectedEvent.about }}
            </p>
            <div class="back-container">
              <fa-icon [icon]="arrowLeft" class="offset"></fa-icon>
              <div class="back-button">
                <a [routerLink]="['/events']">All Events</a>
              </div>
            </div>
          </div>
        </div>
        <div class="details-floater">
          <div class="details-summary">
            <div>
              <h3>Details</h3>
            </div>
            <div class="location-details-container">
              <div class="location-details">
                <div class="location-details-flex">
                  <fa-icon [icon]="calendar" class="offset"></fa-icon>
                  <div class="information">
                    <p>Date & Time</p>
                    <p>{{ selectedEvent.eventDate }}</p>
                    <p>{{ selectedEvent.eventTime }}</p>
                  </div>
                </div>
                <div class="location-details">
                  <div class="location-details-flex">
                    <fa-icon [icon]="location" class="offset"></fa-icon>
                    <div class="information">
                      <p>Location</p>
                      <a [href]="selectedEvent.venueSite" target="_blank">
                        <p>{{ selectedEvent.venueName }}</p>
                      </a>
                      <p>{{ selectedEvent.venueAddress }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="location-details"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [
    FaIconComponent,
    RouterLink
  ],
  styles: `
    .page-container {
      display: flex;
      place-content: flex-start center;
      align-items: flex-start;
      flex: 0 0 auto;
      flex-flow: row;
      gap: 80px;
      height: min-content;
      overflow: visible;
      padding: 40px 80px 0;
      position: relative;
      width: 100%;
      z-index: 1;

      @media (max-width: 599px) {
        flex-direction: column;
        padding: 40px 24px 0;
      }
    }

    .content-wrapper {
      place-content: flex-start center;
      align-items: flex-start;
      display: flex;
      flex: 1 0 0;
      flex-flow: row;
      gap: 80px;
      height: min-content;
      max-width: 1440px;
      overflow: visible;
      padding: 0;
      position: relative;
      width: 1px;

      @media (max-width: 599px) {
        flex: 0 0 auto;
        flex-direction: column;
        order: 0;
        width: 100%;
      }
    }

    .image-container {
      border-radius: 20px;
      flex: 1 0 0;
      height: 60vh;
      overflow: hidden;
      position: relative;
      width: 1px;
      will-change: transform;

      @media (max-width: 599px) {
        flex: 0 0 auto;
        width: 100%;
      }
    }

    .back-container {
      display: flex;
      gap: 8px;
    }

    .back-button {
      outline: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-shrink: 0;
      transform: none;
      opacity: 1;
      cursor: pointer;
    }

    .image-wrapper {
      position: absolute;
      border-radius: inherit;
      inset: 0;
    }

    .image {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-position: center center;
      object-fit: fill;
      image-rendering: auto;
    }

    .information {
      p {
        margin: 0 8px;
      }
    }

    .details-wrapper {
      place-content: flex-start center;
      align-items: flex-start;
      display: flex;
      flex: 0 0 auto;
      flex-flow: row;
      gap: 80px;
      height: min-content;
      overflow: visible;
      padding: 0 80px 80px;
      position: relative;
      width: 100%;
      z-index: 1;

      @media (max-width: 599px) {
        flex-direction: column;
        padding: 0 24px 80px;
      }
    }

    .details-container {
      place-content: flex-start center;
      align-items: flex-start;
      display: flex;
      flex: 1 0 0;
      flex-flow: row;
      gap: 80px;
      height: min-content;
      max-width: 1440px;
      overflow: visible;
      padding: 0;
      position: relative;
      width: 1px;

      @media (max-width: 599px) {
        flex: 0 0 auto;
        flex-direction: column;
        order: 0;
        width: 100%;
      }
    }

    .info-block {
      place-content: flex-start center;
      align-items: flex-start;
      display: flex;
      flex: 3 0 0;
      flex-flow: column;
      gap: 40px;
      height: min-content;
      overflow: hidden;
      padding: 40px 0 0;
      position: relative;
      width: 1px;

      @media (max-width: 599px) {
        flex: 0 0 auto;
        order: 1;
        padding: 0;
        width: 100%;
      }
    }

    .details-floater {
      place-content: flex-end center;
      align-items: flex-end;
      display: flex;
      flex: 1.5 0 0;
      flex-flow: row;
      gap: 10px;
      height: 353px;
      overflow: visible;
      padding: 0;
      position: sticky;
      top: 220px;
      transform: perspective(1200px);
      width: 1px;
      will-change: transform;

      @media (max-width: 599px) {
        flex: 0 0 auto;
        order: 1;
        padding: 0;
        width: 100%;
      }
    }

    .details-summary {
      place-content: flex-start center;
      align-items: flex-start;
      background-color: var(--card-background);
      border-radius: 16px;
      display: flex;
      flex: 1 0 0;
      flex-flow: column;
      gap: 32px;
      height: min-content;
      overflow: visible;
      padding: 24px;
      position: relative;
      width: 1px;
      z-index: 1;
    }

    .location-details-container {
      place-content: center;
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      flex-flow: column;
      gap: 24px;
      height: min-content;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 100%;
    }

    .location-details {
      place-content: flex-start;
      align-items: flex-start;
      display: flex;
      flex: 0 0 auto;
      flex-flow: row;
      gap: 10px;
      height: min-content;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 100%;
      flex-direction: column;
    }

    .location-details-flex {
      place-content: flex-start;
      align-items: baseline;
      display: flex;
      flex: 0 0 auto;
      flex-flow: row;
      gap: 10px;
      height: min-content;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 100%;
    }
  `
})
export default class EventDetailsPage implements OnInit {
  @Input({ transform: numberAttribute }) public eventId!: number;
  events!: GameEvent[];
  selectedEvent!: GameEvent;
  calendar = faCalendar;
  location = faLocation;
  arrowLeft = faArrowLeft;

  ngOnInit() {
    this.events = events;
    this.selectedEvent = this.events.find((event: GameEvent) => event.eventId === this.eventId) as GameEvent;
  }
}
