import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCounter } from '../states/counter/counter.selector';
import { decrement, increment, reset } from '../states/counter/counter.actions';
import { CounterStore } from '../store/counter.store';
// -----------------------ngrx state---------
// @Component({
//   selector: 'app-counter',
//   standalone: true,
//   imports: [AsyncPipe],
//   templateUrl: './counter.component.html',
//   styleUrl: './counter.component.scss',
// })
// export class CounterComponent {
//   count$: Observable<number>;

//   constructor(private store: Store<AppState>) {
//     this.count$ = this.store.select(selectCounter);
//   }

//   increment() {
//     this.store.dispatch(increment());
//   }
//   decrement() {
//     this.store.dispatch(decrement());
//   }
//   reset() {
//     this.store.dispatch(reset());
//   }
// }

//-----------ngrx signals------
// @Component({
//   selector: 'app-counter',
//   standalone: true,
//   imports: [AsyncPipe],
//   templateUrl: './counter.component.html',
//   styleUrl: './counter.component.scss',
// })
// export class CounterComponent {
//   // count$: Observable<number>;

//   count = signal(0);
//   doubleCount = computed(() => this.count() * 2);

//   constructor(private store: Store<AppState>) {
//     // this.count$ = this.store.select(selectCounter);
//     effect(() => {
//       console.log('current count vale is' + this.count());
//     });
//   }

//   increment() {
//     this.count.update((currentNumber) => currentNumber + 1);
//   }
//   decrement() {
//     this.count.update((currentNumber) => currentNumber - 1);
//   }
//   reset() {
//     this.count.set(0);
//   }
// }
//-----------ngrx signals------
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers: [CounterStore],
})
export class CounterComponent {
  counterStore = inject(CounterStore); /// ---------ngrx signals
}
