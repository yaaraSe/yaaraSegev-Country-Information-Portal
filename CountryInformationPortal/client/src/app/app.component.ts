import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
  receiveMessage(m: string): void {
    this.receivedMessage = m;
  }
}
