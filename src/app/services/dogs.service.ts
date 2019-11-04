import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogApiResponse, DogApiStatus } from '../model/dog.model';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { DogLoaded } from '../store/root.actions';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private readonly dogUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private httpClient: HttpClient,
              private store: Store) {
  }

  loadDog() {
    this.httpClient.get(this.dogUrl)
      .pipe(
        filter((dogResponse: DogApiResponse) => dogResponse.status === DogApiStatus.success),
        map((dogResponse: DogApiResponse) => {
          return { img: dogResponse.message };
        }),
      ).subscribe(dog => this.store.dispatch(new DogLoaded(dog)));
  }
}
