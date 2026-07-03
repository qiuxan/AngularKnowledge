import { Component, OnDestroy, signal } from '@angular/core';
import { concatMap, delay, mergeMap, Subject, Subscription, switchMap, tap, of } from 'rxjs';

type MappingMode = 'switchMap' | 'mergeMap' | 'concatMap';

@Component({
  selector: 'app-rxjs-mapping',
  imports: [],
  templateUrl: './rxjs-mapping.html',
  styleUrl: './rxjs-mapping.scss',
})
export class RxjsMapping implements OnDestroy {
  mode = signal<MappingMode>('switchMap');
  logs = signal<string[]>([]);

  private click$ = new Subject<number>();
  private subscription?: Subscription;
  private requestId = 1;

  constructor() {
    this.setupStream('switchMap');
  }

  runRequest() {
    const id = this.requestId;
    this.requestId += 1;

    this.addLog(`click ${id}`);
    this.click$.next(id);
  }

  setMode(mode: MappingMode) {
    this.mode.set(mode);
    this.logs.set([]);
    this.requestId = 1;
    this.setupStream(mode);
  }

  clearLogs() {
    this.logs.set([]);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private getMappingOperator(mode: MappingMode) {
    switch (mode) {
      case 'switchMap':
        return switchMap;
      case 'mergeMap':
        return mergeMap;
      case 'concatMap':
        return concatMap;
    }
  }

  private setupStream(mode: MappingMode) {
    this.subscription?.unsubscribe();

    const operator = this.getMappingOperator(mode);

    this.subscription = this.click$
      .pipe(operator((id) => this.fakeRequest(id).pipe(tap(() => this.addLog(`response ${id}`)))))
      .subscribe();
  }

  private fakeRequest(id: number) {
    this.addLog(`start request ${id}`);
    return of(id).pipe(delay(1000));
  }

  private addLog(message: string) {
    this.logs.update((logs) => [...logs, `${new Date().toLocaleTimeString()} - ${message}`]);
  }
}
