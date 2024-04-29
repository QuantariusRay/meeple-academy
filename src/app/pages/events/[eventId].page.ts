import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameEvent } from '../../assets/events';

@Component({
  selector: 'event-details',
  standalone: true,
  template: `
    <section>

    </section>
  `
})
export class EventDetailsPage {
  @Input() gameEvent: GameEvent;
  @Input() eventId: number;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
}
