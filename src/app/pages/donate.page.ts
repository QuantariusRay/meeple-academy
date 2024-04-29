import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faGamepad, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'donate-page',
  standalone: true,
  template: `
    <section>
      <div class="wrapper">
        <div class="title">
          <h1>Donate</h1>
          <h3>How would you like to donate?</h3>
        </div>
        <div class="cards">
          <div class="card donate-card">
            <a class="card-link">
              <div class="icon-container">
                <fa-icon [icon]="game" size="xl"></fa-icon>
              </div>
              <h3>Donate Goods</h3>
              <p>Buy Games or Utilities that will be donated directly to us.</p>
              <p>
                Donate Now <fa-icon [icon]="faArrowRight" class="offset" size="sm"></fa-icon>
              </p>
            </a>
          </div>
          <div class="card donate-card">
            <a class="card-link"
               target="_blank"
               href="https://www.paypal.com/paypalme/MeepleAcademy?country.x=US&locale.x=en_US">
              <div class="icon-container">
                <fa-icon [icon]="money" size="xl"></fa-icon>
              </div>
              <h3>Donate Money</h3>
              <p>
                Make a one-time or recurring monetary donation.
              </p>
              <p>
                Donate Now <fa-icon [icon]="faArrowRight" class="offset" size="sm"></fa-icon>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;

        @media (max-width: 599px) {
          padding: 80px 24px;
        }
      }

      section {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        place-content: flex-start center;
        align-items: flex-start;
        flex: 0 0 auto;
        gap: 80px;
        height: min-content;
        overflow: visible;
        position: relative;
        width: 100%;
        z-index: 1;
      }

      .title {
        place-content: flex-start center;
        align-items: center;
        display: flex;
        flex: 0 0 auto;
        flex-flow: column;
        gap: 24px;
        height: min-content;
        overflow: visible;
        padding: 0;
        position: relative;
        width: 100%;
      }

      .cards {
        display: flex;
        flex-direction: column;
        margin: 0 auto 24px;
        gap: 16px;

        @media (max-width: 599px) {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
      }

      .donate-card {
        padding: 24px;
        align-items: flex-start;
      }

      .card-link {
        place-content: flex-start center;
        align-items: flex-start;
        cursor: pointer;
        display: flex;
        flex-flow: column;
        gap: 16px;
        height: min-content;
        overflow: hidden;
        padding: 24px;
        position: relative;
        text-decoration: none;
        will-change: transform;
        color: var(--body-color) !important;


        p {
          margin: 0;
        }
      }

      .icon-container {
        place-content: center;
        align-items: center;
        display: flex;
        flex: 0 0 auto;
        flex-flow: row;
        gap: 10px;
        height: 48px;
        overflow: hidden;
        padding: 8px;
        position: relative;
        width: 48px;
        will-change: transform;
        border-radius: 99px;
        background-color: var(--icon-background-color);
      }
    `,
  ],
  imports: [FaIconComponent]
})
export default class DonatePage {
  game = faGamepad;
  money = faMoneyBill;
  arrow = faArrowRight;
  protected readonly faArrowRight = faArrowRight;
}
