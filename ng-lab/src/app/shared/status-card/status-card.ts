import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  imports: [],
  templateUrl: './status-card.html',
  styleUrl: './status-card.scss',
})
export class StatusCard {
  title = input.required<string>();
  description = input.required<string>();
}