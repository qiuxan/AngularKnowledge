import { Component } from '@angular/core';
import { StatusCard } from '../../shared/status-card/status-card';

@Component({
  selector: 'app-standalone-demo',
  imports: [StatusCard],
  templateUrl: './standalone-demo.html',
  styleUrl: './standalone-demo.scss',
})
export class StandaloneDemo {}