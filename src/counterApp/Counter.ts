import {Component, inject, signal} from '@angular/core';
import {CounterStore} from '../shared/store/CounterStore';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';

@Component({
  host:{

  },
  imports:[ButtonModule, RippleModule],
  selector: 'Counter',
  template: `
    <div class="rounded-lg dark:bg-surface-800 ring-2 dark:ring-surface-500 dark:hover:bg-surface-700 hover:bg-yellow-400 duration-300
    ring-surface-300 mt-3 bg-yellow-600 shadow min-h-28 md:w-[300px] p-4">
      <h1 class="text-2xl text-center text-shadow-stone-600">Counter App</h1>
      <div class="flex flex-col justify-between ">
        <p class=" text-6xl text-center text-pink-700 dark:text-white/90 text-shadow-2xs" [class]="counterAnimation()">{{ counter() }}</p>
        <div class="flex justify-between p-1 ">
          <button (click)="increment()" class="" pButton pRipple>Increment</button>
          <button (click)="decrement()" pButton pRipple>Decrement</button>
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

}
