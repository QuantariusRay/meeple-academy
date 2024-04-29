import { Component } from '@angular/core';
import { faBullhorn, faLaptop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ListCardComponent } from './list-card.component';

@Component({
  selector: 'about-us',
  standalone: true,
  template: `
    <h2>What we do</h2>
    @for (content of contentList; track content) {
      <list-card [contentHeader]="content.contentHeader" [contentText]="content.contentText"
                 [contentIcon]="content.icon"></list-card>
    }
<!--    <a style="width: 9rem" class="button">Get Involved</a>-->
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
  `],
  imports: [
    ListCardComponent
  ]
})
export class AboutUsComponent {
  laptop = faLaptop;
  users = faUsers;
  bullhorn = faBullhorn;

  contentList = [
    {
      icon: this.laptop,
      contentHeader: 'Educational Outreach',
      contentText: 'We provide public facilities such as schools and libraries with board games to enrich educational experiences and promote social engagement. By incorporating board games into learning environments, we aim to enhance critical thinking, communication, and teamwork skills while fostering a love for learning through play.'
    },
    {
      icon: this.users,
      contentHeader: 'Community Engagement',
      contentText: 'We actively engage with the community by organizing public board game events at local schools, community centers, and businesses. Through these events, we aim to introduce people of all ages to the joys of tabletop gaming, foster social interaction, and promote problem-solving skills in a fun and inclusive environment.'
    },
    {
      icon: this.bullhorn,
      contentHeader: 'Social Events',
      contentText: 'We host social events that bring members of the community together for board gaming fun and friendship. Join us for evenings filled with laughter, camaraderie, and of course, plenty of tabletop gaming. Whether you\'re a seasoned gamer or new to the hobby, our events provide a welcoming space to connect over games, enjoy drinks, and forge lasting friendships.'
    }
  ]
}
