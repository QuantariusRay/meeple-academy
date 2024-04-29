import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'events-page',
  imports: [
    RouterOutlet
  ],
  template: `
    <router-outlet/>`
})
export default class EventsPage {

}
