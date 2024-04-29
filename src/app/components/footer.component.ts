import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="social-container">
        <div class="image-container">
          <picture>
            <source srcset="/meeple-academy-white.png" media="(prefers-color-scheme: dark)">
            <img class="image" src="/meeple-academy-black.png">
          </picture>
        </div>
        <div class="socials">
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
        </div>
        <div class="links">
          <div>
            <a class="footer-link" href="#home">Home</a>
          </div>
          <div>
            <a class="footer-link" href="#what-we-do">What We Do</a>
          </div>
          <div>
            <a class="footer-link" href="#our-team">Our Team</a>
          </div>
          <div>
            <a class="footer-link" [routerLink]="['/events']">Events</a>
          </div>
          <div>
            <a class="footer-link" href="https://www.adventure-con.com" target="_blank">AdventureCon</a>
          </div>
          <div>
            <a class="footer-link" [routerLink]="['/donate']">Donate</a>
          </div>
        </div>
      </div>
      <div class="copywrite">
        <p>© 2023 Meeple Academy. All Rights Reserved.</p>
        <p>Meeple Academy is a 501(c)(3) tax-exempt organization.</p>
        <p>EIN: 93-3739890</p>
      </div>
    </footer>

  `,
  styles: [
    `
      :host {
        flex: none;
        height: auto;
        position: relative;
        width: 100%;
      }

      footer {
        background-color: var(--card-background);
        opacity: 1;
        padding: 48px 24px;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        gap: 72px;
        height: auto;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }

      .social-container {
        align-items: center;
        display: flex;
        flex: none;
        flex-direction: column;
        flex-wrap: nowrap;
        height: min-content;
        justify-content: center;
        overflow: visible;
        padding: 0;
        position: relative;
        width: min-content;
      }

      .image-container {
        aspect-ratio: 1.616 / 1;
        flex: none;
        height: auto;
        overflow: visible;
        position: relative;
        width: 200px;
      }

      .image {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center center;
        object-fit: contain;
        image-rendering: auto;
      }

      .socials {
        align-items: center;
        display: flex;
        flex: none;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 16px;
        height: min-content;
        justify-content: center;
        max-width: 280px;
        overflow: hidden;
        padding: 0;
        position: relative;
        width: 280px;
      }

      .links {
        align-content: unset;
        align-items: unset;
        display: grid;
        grid-auto-rows: minmax(0, 1fr);
        grid-template-columns: repeat(2, minmax(80px, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        width: 100%;
      }

      .copywrite {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-shrink: 0;
        transform: none;
        opacity: 1;

        > p {
          text-align: center;
          font-size: 16px;
          margin: 0;
        }
      }

      .footer-link {
        align-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 10px;
        height: min-content;
        overflow: visible;
        padding: 12px 14px;
        position: relative;
        text-decoration: none;
        font-weight: 700;
        line-height: 24px;
      }
    `,
  ],
  imports: [
    RouterLink
  ]
})
export default class FooterComponent {

}
