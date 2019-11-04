import { Component, OnDestroy, OnInit } from '@angular/core';
import { DogsService } from './services/dogs.service';
import { Select, Store } from '@ngxs/store';
import { DogState } from './store/root.state';
import { Observable, Subscription } from 'rxjs';
import { Dog } from './model/dog.model';
import { IncrementCounter } from './store/root.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit, OnDestroy {
  @Select(DogState.getDogs) dogs$: Observable<Dog[]>;
  @Select(DogState.getCounter) counter$: Observable<number>;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private dogService: DogsService,
              private store: Store) {
  }

  ngOnInit() {
    this.dogService.loadDog();
    this.subscriptions.add(this.store.select(DogState.getCounter)
      .subscribe(counter => console.log(counter)));
  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.subscriptions.unsubscribe();
  }

  loadAnother() {
    this.dogService.loadDog();
  }

  incrementCount() {
    this.store.dispatch(new IncrementCounter());
  }
}
