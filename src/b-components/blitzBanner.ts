import {Component} from '@angular/core';

@Component({
  selector: 'BlitzBanner',
  template: `
    <div class="bg-stone-700 min-h-[470px] duration-300  tab:min-h-[590px] hd:min-h-[650px] 4k:min-h-[60vh] mt-3 relative overflow-hidden grid grid-cols-3 grid-rows-3 ">
      <div class="
      absolute -right-[28%] -top-[17%] scale-60
      tab:scale-95 tab:top-[3%]  tab:right-[15%]
      hd:scale-120 hd:top-[2%]  hd:right-[20%]
      4k:scale-200 4k:top-[13.5%]  4k:right-[30%] duration-300"
      >
        <img src="images/munachi-ads-02.png" alt="" class="" >
      </div>
      <div class="bg-white rounded-2xl p-4 justify-evenly flex flex-col border-gray-700 border-1 col-span-3 tab-p:col-span-2 tab:row-span-2 ">
        <h1 class="text-4xl md:text-6xl duration-300 xl:text-8xl 4k:text-9xl font-bold font-roboto-flex">Look <br> beyond <br>limits</h1>
        <div class="flex items-center">
          <a href="#" class="bg-red-200 text-white text-shadow-2xs  duration-300 bg-gradient-to-br from-red-400 to-amber-400
          py-3 md:py-4 px-6 md:px-10  rounded-[100vh] text-center me-4">
            <span class="">
              Get in touch
            </span></a>
          <div class="size-10 md:size-12 border-1 border-stone-400 rounded-full flex justify-center items-center text-2xl"><i class="la-envelope las text-green-600 "></i></div>
        </div>


      </div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 col-span-3 tab-p:col-span-1 tab:row-span-2 tab-l:col-span-1  bg-yellow-50 duration-300">Data 2</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 ">Data 3</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 ">Data 4</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 ">Data 5</div>

    </div>
  `
})
export class BlitzBanner {
}
