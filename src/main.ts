import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> SAY HELLO {{name}}!</h1>
    <a target="_blank" href="https://netflix.com">
      Pagina de netflix 
    </a>
  `,
})
export class App {
  name = 'Pagina inicial';
}

bootstrapApplication(App);
