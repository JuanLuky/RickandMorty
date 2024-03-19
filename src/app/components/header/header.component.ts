import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>Hugo e Danillo</h1>
      <p>Rick e Morty</p>
    </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
