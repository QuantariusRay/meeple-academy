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
      name: 'Jesse',
      bio: 'Jesse is the catalyst for the forming of Meeple Academy of the Ozarks, and a cheerleader of sorts! He and his wife have experience running small businesses, and with that experience he reminds us that we can make a difference. Without Jesse, we wouldn’t have the determination that we do now!'
    },
    {
      image: '/profile-pics/clancy.jpg',
      title: 'Vice-President',
      name: 'Clancy',
      bio: 'Clancy wears many hats as the Library Curator. Primarily, he’s in charge of putting together a robust library of board games that appeals to board gamers at all levels and from all walks of life. He’s also set up all of our tools for communication and organization. And last of all, he’s a sweetheart. You could tell him, “I’m going to destroy you [in this game],” and he’d simply reply “I like your spirit!”'
    },
    {
      image: '/profile-pics/q.png',
      title: 'Event Director',
      name: 'Q',
      bio: 'Q is exceptionally smart and fastidious. He carries with him a lot of ambition, and backs it up with thorough execution. He’s the architect of our website, our idea generator, and our do-everything guy. He’s talented, and not shy about it!'
    },
    {
      image: '/profile-pics/liz.jpeg',
      title: 'Community Outreach Director',
      name: 'Liz',
      bio: 'The writer of most of Meeple Academy’s online content and emails. Talks a lot too. She’s alright.'
    },
    {
      image: '/profile-pics/heather.jpeg',
      title: 'Financial Director',
      name: 'Heather',
      bio: 'Our fiscal guru who’s on top of keeping us on track to host board game events, and making sure that we conduct ourselves properly as a nonprofit in good standing! It’s not the spiciest job, but it’s one that requires a smart woman with experience and training. And Heather’s the right one for us. She runs a monthly gathering with her doting husband dubbed “Castle Adams,” and is raising two ancient dogs that wear diapers.'
    },
    {
      image: '/profile-pics/meeple.png',
      title: 'Marketing Director',
      name: 'Jessica',
      bio: `Jessica is our newest member and doesn't exactly have a cool blurb like the rest of us :(`
    }
  ];
}
