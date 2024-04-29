import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { AboutUsComponent } from '../components/about-us.component';
import { ListCardComponent } from '../components/list-card.component';
import { OurStoryComponent } from '../components/our-story.component';
import { TheTeamComponent } from '../components/the-team.component';
import MissionStatementComponent from '../components/mission-statement.component';
import FooterComponent from '../components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section id="home">
      <app-hero/>
    </section>
    <section id="what-we-do">
      @defer {
        <about-us/>
      }
    </section>
    <section>
      @defer {
        <our-story/>
      }
    </section>
    <section id="our-team">
      @defer {
        <the-team/>
      }
    </section>
    <section>
      @defer {
        <mission-statement/>
      }
    </section>
  `,
  imports: [
    HeroComponent,
    AboutUsComponent,
    ListCardComponent,
    OurStoryComponent,
    TheTeamComponent,
    MissionStatementComponent,
    FooterComponent
  ]
})
export default class HomeComponent {

}
