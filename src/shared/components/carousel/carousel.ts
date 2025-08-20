import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'Carousel',
  template: `
    <div class="">
      <div class="w-[550px] h-[300px] p-2  gap-x-4 overflow-x-hidden *:[div]:inline-block">
        <div class="dark:bg-gray-700 bg-stone-400  p-6 ring-2 ring-gray-500 rounded-3xl h-full w-[550px]">
          <h1 class="text-4xl dark:text-orange-500">Ist Carousel Content Here</h1>
        </div>
        <div class="dark:bg-gray-700 bg-stone-400  p-6 ring-2 ring-gray-500 rounded-3xl h-full w-[550px]">
          <h1 class="text-4xl dark:text-orange-500">2nd Carousel Content Here</h1>
        </div>
        <div class="dark:bg-gray-700 bg-stone-400  p-6 ring-2 ring-gray-500 rounded-3xl h-full w-[550px]">
          <h1 class="text-4xl dark:text-orange-500">3rd Carousel Content Here</h1>
        </div>
      </div>
    </div>

  `
})
export class Carousel {
}
