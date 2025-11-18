import {Component, signal, computed} from "@angular/core";

@Component({
  template: `
    <div class="p-6 text-center w-[300px] h-[280px] border-2 border-b-neutral-500 rounded-lg">
        <h1 class="text-md!">Signal Counter</h1>
        <p class="text-6xl mt-4">{{counter()}}</p>
      <div class="space-x-5 mt-10">
        <button (click)="increment()" class="px-2 py-1 bg-blue-500 text-white rounded-lg ring-blue-300 ring-2">Increment</button>
        <button (click)="decrement()" class="px-2 py-1 bg-red-500 text-white rounded-lg ring-red-300 ring-2">Decrement</button>
        <p>Counter x 10 => {{counterBy10()}}</p>
        <p>Hello Value is: {{helloValue()}}</p>
      </div>
    </div>
  `,
  selector: "counter-signal, CounterWithSignal"
})
export class CounterWithSignal {
  protected helloValue= computed(() => {
    return this.counterBy10() + 10000;
  });
  counter = signal(0);
  counterBy10 = computed(() =>{
    return this.counter() * 10;
  });

  increment() {
    this.counter.update((prev) =>  prev + 1 );
  }
  decrement() {
    this.counter.update((prev) =>  prev - 1 );
  }
}
