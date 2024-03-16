import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Userservice } from '../service/user.service';
import { take } from 'rxjs';
import { User } from '../service/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, AsyncPipe ],
  template: `
    <app-header />
    <div class="container">

      @for (user of users$ | async; track user.id) {
        <div class="card">
          <div class="content-img">
            <img [src]="user.image" [alt]="user.name" />
          </div>
          <div class="content-description">
            <h1> {{ user.name }} </h1>
            <p><span>{{ user.status }}</span>-{{ user.species }}</p>
          </div>
        </div>
      }

    </div>
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-api';

  private userService = inject(Userservice);
  protected users$ = this.userService.getUsers();

  constructor() {
  }
}
