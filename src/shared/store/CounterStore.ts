import {signalStore, withState, withComputed, withMethods, patchState, withHooks} from "@ngrx/signals";
import {computed} from '@angular/core';

type initialCounterState = {
  counter: number;
}
const initCounter: initialCounterState = {counter: 0};
export const CounterStore = signalStore(
  {providedIn: "root"},
  withState(initCounter),
  withComputed(store => {
    return {
      count: computed(() => store.counter()),
    }
  }),
  withMethods((store) => {
    return {
      increment(){
        patchState(store, (s) => ({counter : s.counter + 1}));
        console.log("Increment counter Called => with Value :",store.counter());
      },
      decrement(){
        patchState(store, (s) => ({counter : s.counter - 1}));
        console.log("Decrement counter Called => with Value :", store.counter());
      }
    }
  }),
  withHooks(store =>{
    return {
      onInit(){
      patchState(store, (s) => ({ counter : 5}));
      }
    }
  })
);
