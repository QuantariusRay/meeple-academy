import { Component, Input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'list-card',
  standalone: true,
  template: `
    <div class="container">
      <div class="icon-container">
        <fa-icon [icon]="contentIcon" size="2x"></fa-icon>
      </div>
      <div class="content-container">
        <h3>{{ contentHeader }}</h3>
        <div class="content-text" [class.open]="expandText()">
          <p>{{ contentText }}</p>
        </div>
        <div class="toggle">
          <p (click)="toggleExpansion()">{{ expandText() ? 'Show Less' : 'Show More' }}</p>
        </div>
      </div>
    </div>
  `,
  imports: [
    FontAwesomeModule
  ],
  styles: [`
    .container {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      height: min-content;
      justify-content: center;
      padding: 0;
      width: 100%;
      position: relative;
    }

    .icon-container {
      background-color: var(--secondary-color);
      border-radius: 99px;
      opacity: 1;
      transform: none;
      transform-origin: 50% 50% 0;
      align-content: center;
      align-items: center;
      display: flex;
      flex: none;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      height: 72px;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 72px;
      will-change: transform;
    }

    .content-container {
      display: flex;
      align-items: flex-start;
      flex: 1 0 0;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0;
      height: min-content;
      justify-content: center;
      overflow: hidden;
      padding: 0;
      width: 1px;
    }

    .content-text {
      height: 134px;
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow: hidden;
      position: relative;
      padding: 8px 0 0;
      width: 100%;
      transition: height 1s ease;
    }

    .content-text.open {
      height: 390px;
    }

    .toggle {
      @media(min-width: 599px) {
        display: none;
      }
    }
  `],
})
export class ListCardComponent {
  @Input() contentHeader!: string;
  @Input() contentText!: string;
  @Input() contentIcon!: IconProp;

  expandText = signal(false);

  toggleExpansion() {
    this.expandText.update(val => !val);
  }
}
