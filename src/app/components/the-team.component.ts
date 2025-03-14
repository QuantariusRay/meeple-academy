import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card.component';

@Component({
  selector: 'the-team',
  standalone: true,
  template: `
    <h2 style="text-align: center;">The Team</h2>
    @for (member of team; track $index) {
      <profile-card [person]="member"></profile-card>
    }
  `,
  imports: [
    ProfileCardComponent
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      padding: 80px;
      gap: 40px;
      align-items: center;

      @media (max-width: 599px) {
        padding: 80px 24px;
        align-items: flex-start;
      }
    }
  `]
})
export class TheTeamComponent {
  team = [
    {
      image: '/profile-pics/jesse.jpg',
      title: 'President',
      pronouns: 'He/Him',
      bio: 'Jesse as the president and one of the founding members of Meeple Academy, oversees the board, makes final decisions, and helps out in any capacity he can. He has been playing board games since 2012, and his favorite board game mechanics are worker placement and engine building. Outside of board games, he enjoys hiking and video games. '
    },
    {
      image: '/profile-pics/clancy.jpg',
      title: 'Vice President',
      pronouns: 'He/Him',
      bio: 'Clancy as vice president oversees operations and curates Meeple Academy’s extensive board game library for the community to check out and play games. He has been playing board games his entire life, and his favorite board game mechanic is worker placement. When he is not playing board games, he enjoys spending time in nature through hiking, camping, and cycling.'
    },
    {
      image: '/profile-pics/q.png',
      title: 'Event Director',
      pronouns: 'He/Him',
      bio: 'Q as event director organizes and oversees event programming, from setting meetings with the board, connecting with local organizations and businesses, to making decisions for AdventureCon. He has been playing board games since 2005, and his favorite board game genre are deck builders. When he is not gaming, his passion is in software development, which he manages Meeple Academy’s websites.'
    },
    {
      image: '/profile-pics/jessica.jpg',
      title: 'Marketing Director',
      pronouns: 'She/Her',
      bio: 'Jessica as marketing director designs graphics, manages social media engagement, and shares Meeple Academy’s events with the community. She has been playing board games since 2011, and her favorite board game genres are polyomino tile-laying (Tetris!) and social deduction games. Outside of board games, her other hobbies include running a local Asian food blog and sewing cosplay for comic cons.'
    },
    {
      image: '/profile-pics/meeple.png',
      title: 'Finance Director',
      pronouns: 'He/Him',
      bio: 'Brent as finance director manages the budget and provides insight on financial decisions for Meeple Academy.'
    },
    {
      image: '/profile-pics/meeple.png',
      title: 'Outreach Director',
      pronouns: 'He/Him',
      bio: `Wyatt as outreach director finds new connections, reaches out and engages the community, and coordinates volunteers.`
    }
  ];
}
