import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter, selectDoubleCounter } from '../../state/counter.selectors';
import { decrement, increment, reset } from '../../state/counter.actions';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-ngrx-demo',
  imports: [AsyncPipe],
  templateUrl: './ngrx-demo.html',
  styleUrl: './ngrx-demo.scss',
})
export class NgrxDemo {
  private store = inject(Store);

  count$ = this.store.select(selectCounter);
  doubleCount$ = this.store.select(selectDoubleCounter);

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
