import { Component, signal } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
  tasks = signal<Task[]>([
    { id: 1, title: 'Review Angular signals', done: true },
    { id: 2, title: 'Practice control flow syntax', done: false },
    { id: 3, title: 'Explain track', done: false },
  ]);

  private nextId = 4;

  addTask() {
    const newTask: Task = {
      id: this.nextId,
      title: `New task ${this.nextId}`,
      done: false,
    };

    this.nextId += 1;
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  toggleTask(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  removeTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  clearTasks() {
    this.tasks.set([]);
  }

  resetTasks() {
    this.tasks.set([
      { id: 1, title: 'Review Angular signals', done: true },
      { id: 2, title: 'Practice control flow syntax', done: false },
      { id: 3, title: 'Explain track', done: false },
    ]);
    this.nextId = 4;
  }
}