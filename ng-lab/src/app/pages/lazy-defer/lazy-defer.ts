import { Component, signal } from '@angular/core';
import { HeavyChart } from './heavy-chart/heavy-chart';

@Component({
  selector: 'app-lazy-defer',
  imports: [HeavyChart],
  templateUrl: './lazy-defer.html',
  styleUrl: './lazy-defer.scss',
})
export class LazyDefer {
  shouldShowChart = signal(false);

  showChart() {
    this.shouldShowChart.set(true);
  }
}