import {Component} from '@angular/core';
import {Counter} from '../../counterApp/Counter';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    Counter
  ],
  template: `
    <div class="h-full  mt-[60px] bg-white grid place-items-center rounded-2xl">
      <div class="flex gap-y-6 flex-col h-screen items-center justify-center  ">
        <Counter />
          <div
            class="min-h-[300px] flex-grow-1 w-full md:w-[350px] rounded-3xl bg-white p-4 shadow-md ring-blue-200 duration-300 hover:ring-2 has-[:focus]:ring-pink-500 has-[:focus]:scale-105 ">
            <div class="md:flex md:flex-row">
              <p class="mb-2  peer-focus:text-red-600">Enter Name</p>
              <input type="text"
                     class="w-full rounded-2xl px-4 py-2 ring ring-stone-400 outline-0 duration-300 placeholder:text-blue-100 focus:ring-blue-300 md:w-[70%] focus:shadow-xl peer"
                     placeholder="Enter your Full Name" />
            </div>
          </div>
      </div>

    </div>
  `
})
export class AppPageBody {
}
