import { Component, computed, inject, signal } from '@angular/core';
import { CounterStore } from '../../shared/counter-store';

@Component({
  selector: 'app-state-management',
  imports: [],
  templateUrl: './state-management.html',
  styleUrl: './state-management.scss',
})
export class StateManagement {
  count = signal(0);
  private counterStore = inject(CounterStore);

  sharedCount = this.counterStore.count;
  sharedDoubleCount = this.counterStore.doubleCount;

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  }

  incrementShared() {
    this.counterStore.increment();
  }

  decrementShared() {
    this.counterStore.decrement();
  }

  resetShared() {
    this.counterStore.reset();
  }
}
