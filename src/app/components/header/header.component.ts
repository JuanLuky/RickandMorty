import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>Rick e Morty</h1>
      <p>PERSONAGENS</p>
    </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
