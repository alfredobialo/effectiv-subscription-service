import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'BarChart',
  template: `


    <div class="h-[500px] px-4 flex  justify-start gap-10 items-end w-[700px] bg-gray-200 radius-lg border-2 border-gray-600">
      <div class="h-[70%] bg-red-500 w-[50px]"></div>
      <div class="h-[88%] bg-pink-500 w-[50px]"></div> <!-- 2400 pts  = 80% -->
      <div class="h-[34%] bg-blue-500 w-[50px]"></div>
      <div class="h-[52%] bg-orange-500 w-[50px]"></div>
      <div class="h-[45%] bg-black w-[50px]"></div>

    </div>
  `
})
export class BarChart {
}
