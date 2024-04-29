import { Component } from '@angular/core';

@Component({
  selector: 'our-story',
  standalone: true,
  template: `
    <h2>Our Story</h2>
    <p>
      We are Meeple Academy of the Ozarks, and we’re a 501c3 that believes in the power of board games to forge communities!
      It may sound cheesy, but we mean it! The magic of board games is that they don’t play themselves. Everyone at the table has to agree to a simple, low-stakes social contract: to play by the rules.
      And by pushing cardboard around, pretending that the rules matter, and laughing along the way, players become a community!
    </p>
    <a style="width: 9rem" class="button">Get Involved</a>
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
    }
  `]
})
export class OurStoryComponent {}
