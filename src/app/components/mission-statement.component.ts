import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mission-statement',
  standalone: true,
  template: `
    <div class="card">
      <h2>Our Mission</h2>
      <p>
        Meeple Academy of the Ozarks is committed to equipping Northwest Arkansas with board games as a tool to bring
        people together, teach problem-solving skills, and promote social engagement amongst adults and kids
        middle-school and up alike.
        We have run or assisted several public board game events at local schools, community centers, and businesses.
        We will continue to engage in public outreach, and hope to see a long future of making friends out of strangers
        within the Northwest Arkansas Community.
      </p>
      <a class="button" style="width: 9rem" [routerLink]="['/donate']">Donate</a>
    </div>

  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        padding: 80px 24px;
      }
    `,
  ],
  imports: [
    RouterLink
  ]
})
export default class MissionStatementComponent {

}
