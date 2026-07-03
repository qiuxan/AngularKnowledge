import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type User = {
  id: number;
  name: string;
  role: string;
};

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {
  user = input.required<User>();
}