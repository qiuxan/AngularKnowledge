import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-chart',
  imports: [],
  templateUrl: './heavy-chart.html',
  styleUrl: './heavy-chart.scss',
})
export class HeavyChart {
  data = [
    { label: 'Signals', value: 80 },
    { label: 'RxJS', value: 70 },
    { label: 'Forms', value: 65 },
    { label: 'Routing', value: 75 },
  ];
}