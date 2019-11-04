import { Dog } from '../model/dog.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DogLoaded, IncrementCounter } from './root.actions';

export interface DogStateModel {
  dogs: Dog[];
  counter: number;
}

@State<DogStateModel>({
  name: 'dogs',
  defaults: {
    dogs: [],
    counter: 0,
  },
})
export class DogState {
  constructor() {
  }

  @Selector()
  static getDogs(state: DogStateModel): Dog[] {
    return state.dogs;
  }

  @Selector()
  static getCounter(state: DogStateModel): number {
    return state.counter;
  }

  @Action(DogLoaded)
  dogLoaded(ctx: StateContext<DogStateModel>, { dog }: DogLoaded) {
    const state = ctx.getState();
    ctx.patchState({
      dogs: [ ...state.dogs, dog ],
    });
  }

  @Action(IncrementCounter)
  incrementCounter(ctx: StateContext<DogStateModel>) {
    const state = { ...ctx.getState() };
    ctx.patchState({
      counter: ++state.counter,
    });
  }
}
