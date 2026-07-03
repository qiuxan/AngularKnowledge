import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  countLabel = computed(() => {
    const value = this.count();

    if (value > 0) {
      return 'Positive';
    }

    if (value < 0) {
      return 'Negative';
    }

    return 'Zero';
  });

  constructor() {
    effect(() => {
      console.log('count changed:', this.count());
    });
  }

  increase() {
    this.count.update((value) => value + 1);
  }

  decrease() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
