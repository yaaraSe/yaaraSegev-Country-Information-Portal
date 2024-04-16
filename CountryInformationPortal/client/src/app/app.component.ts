import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { CounterComponent } from './counter/counter.component';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCounter } from './states/counter/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    MatButtonModule,
    HeaderComponent,
    UsersModule,
    CounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CountryInformationPortal';
  mess = 'hii from Parent';
  receivedMessage: string = '';
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCounter);
  }

  receiveMessage(m: string): void {
    this.receivedMessage = m;
  }
}
