import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { UserCard } from './user-card/user-card';

type User = {
  id: number;
  name: string;
  role: string;
};

@Component({
  selector: 'app-onpush-demo',
  imports: [UserCard],
  templateUrl: './onpush-demo.html',
  styleUrl: './onpush-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushDemo {
  user = signal<User>({
    id: 1,
    name: 'Alice',
    role: 'Frontend Developer',
  });

  mutateUser() {
    this.user().name = 'Mutated Alice';
  }

  replaceUser() {
    this.user.set({
      ...this.user(),
      name: 'Replaced Alice',
    });
  }

  resetUser() {
    this.user.set({
      id: 1,
      name: 'Alice',
      role: 'Frontend Developer',
    });
  }
}