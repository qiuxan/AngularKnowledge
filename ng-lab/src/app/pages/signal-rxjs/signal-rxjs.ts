import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, delay, distinctUntilChanged, of, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-signal-rxjs',
  imports: [FormsModule],
  templateUrl: './signal-rxjs.html',
  styleUrl: './signal-rxjs.scss',
})
export class SignalRxjs {
  searchText = signal('');
  isLoading = signal(false);
  results = signal<string[]>([]);

  private searchTerms$ = new Subject<string>();

  constructor() {
    this.searchTerms$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.isLoading.set(true);
          this.results.set([]);
        }),
        switchMap((term) => this.fakeSearchApi(term)),
      )
      .subscribe((results) => {
        this.results.set(results);
        this.isLoading.set(false);
      });
  }

  onSearchChange(value: string) {
    this.searchText.set(value);
    this.searchTerms$.next(value);
  }

  private fakeSearchApi(term: string) {
    const trimmedTerm = term.trim();

    if (!trimmedTerm) {
      return of([]);
    }

    const mockResults = [
      `${trimmedTerm} overview`,
      `${trimmedTerm} examples`,
      `${trimmedTerm} interview questions`,
    ];

    return of(mockResults).pipe(delay(800));
  }
}