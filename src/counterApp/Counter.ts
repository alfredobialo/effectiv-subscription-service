import {Component, inject, signal} from '@angular/core';
import {CounterStore} from '../shared/store/CounterStore';

@Component({
  host:{

  },
  selector: 'Counter',
  template: `
    <div class="rounded-lg bg-stone-100 shadow min-h-28 md:w-[300px] p-4">
      <h1 class="text-2xl text-center text-shadow-stone-600">Counter App</h1>
      <div class="flex flex-col justify-between ">
            <p class=" text-6xl text-center text-pink-700 text-shadow-2xs" (animationend)="animationEnded($event)"  [class]="counterAnimation()">{{counter()}}</p>
        <div class="flex justify-between p-1 ">
          <button (click)="increment()" class="px-3 py-2 hover:shadow-md bg-blue-600 hover:bg-blue-800 duration-300 hover:ring-bg-blue-500 hover:ring-2 text-white/90 hover:text-white hover:translate-y-1 rounded-lg">Increment</button>
          <button (click)="decrement()" class="px-3 py-2 hover:shadow-md bg-blue-600 hover:bg-blue-800 duration-300 hover:ring-bg-blue-500 hover:ring-2 text-white/90 hover:text-white hover:translate-y-1 rounded-lg">Decrement</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .counter-increment {
      animation-name: increment;
      animation-duration: 500ms;
      animation-iteration-count: 1;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .counter-decrement {
      animation-name: decrement;
      animation-duration: 400ms;
      animation-iteration-count: 1;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes increment {
      from{
        transform: translateY(50%) scale(0.5);
        opacity: 0;

      }
      to{
        transform: translateY(0%) scale(1);
        opacity: 1;
      }
    }
    @keyframes decrement {
       0%{
         transform: translateY(0%) scale(1);
         opacity: 1;

       }
       50%{
         transform: translateY(-50%) scale(0.4);
         opacity: 0;
       }
       100%{
          transform: translateY(0%) scale(1);
          opacity: 1;
        }
     }
  `
})
export class Counter {
  private counterStore = inject(CounterStore);
  counter = this.counterStore.count;
  protected counterAnimation = signal<string | null>(null);
  increment() {

    this.counterStore.increment();
    this.addRemoveAnimationStyle("counter-increment");
  }

  decrement() {

    this.counterStore.decrement();
    this.addRemoveAnimationStyle("counter-decrement",400);
  }

  private addRemoveAnimationStyle(cssClass:string , duration:number = 500){
    this.counterAnimation.update((x) => cssClass);
    window.setTimeout(() => {
      this.counterAnimation.set(null);
    }, duration);
  }

  animationEnded(evt : AnimationEvent) {
    console.log("Animation ended", evt);
  }
}
