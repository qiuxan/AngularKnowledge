import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-state-management',
  imports: [],
  templateUrl: './state-management.html',
  styleUrl: './state-management.scss',
})
export class StateManagement {
  count = signal(0);

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
}