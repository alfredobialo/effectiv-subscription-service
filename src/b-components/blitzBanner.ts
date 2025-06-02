import {Component} from '@angular/core';

@Component({
  selector: 'BlitzBanner',
  template: `
    <div class="bg-black h-[270px] md:h-[380px] xl:h-[580px] mt-3 md:flex relative overflow-hidden">
      <div class="h-full bg-white rounded-[11px] grow-2 border-1 px-6 pt-10 flex flex-col justify-around">
        <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold font-roboto-flex">Look <br> beyond <br>limits</h1>
        <div class="flex items-center">
          <a href="#" class="bg-red-200 py-3 md:py-4 px-6 md:px-10  rounded-[100vh] text-center me-4">
            <span class="tab-p:hidden ">
              Follow
            </span>
            <span class="md:inline hidden">
              Get in touch
            </span></a>
          <div class="size-10 md:size-12 border-1 border-stone-400 rounded-full flex justify-center items-center text-2xl"><i class="la-envelope las text-green-600 "></i></div>
        </div>


      </div>
      <div class="h-full rounded-[11px] bg-yellow grow-1 border-1 bg-yellow-50">Am a Content</div>
        <div class=" absolute -right-[30%] md:scale-150 scale-70 lg:scale-200 -bottom-[35%] md:-bottom-[25%] lg:-bottom-[10%] md:right-[15%] lg:right-[15%]">
          <img src="images/munachi-ads-02.png" alt="" >
        </div>

    </div>
    <div class="bg-stone-700 h-[80vh] grid grid-cols-3 grid-rows-2 ">
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 col-span-3 lg:col-span-2 ">Data 1</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 col-span-3 tab-p:col-span-2 tab-l:col-span-1">Data 2</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 ">Data 3</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 ">Data 4</div>
      <div class="bg-white rounded-2xl p-4 border-gray-700 border-1 grid-auto-col">Data 5</div>
    </div>
  `
})
export class BlitzBanner {
}
