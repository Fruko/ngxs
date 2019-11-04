import { Dog } from '../model/dog.model';

export const enum DogActionType {
  LOADED = '[DOG] imagine has been loaded',
  INCREMENT = '[DOG] increment',
}

export class DogLoaded {
  static readonly type = DogActionType.LOADED;

  constructor(public dog: Dog) {
  }
}

export class IncrementCounter {
  static readonly type = DogActionType.INCREMENT;
}
