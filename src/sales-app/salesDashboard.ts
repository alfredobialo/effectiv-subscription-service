import {Component} from '@angular/core';

@Component({
  selector: 'SalesDashboard',
  template: `
  <div class=" flex min-h-screen ">
    <div class=" w-[60px]
    md:w-[85px] flex flex-col items-center justify-between
    me-2 p-3 fixed top-0 bottom-0 left-0">
      <div class="flex flex-col items-center">
        <div class=" size-[56px] md:size-16 mt-3 mb-10 bg-white rounded-full ">

        </div>

        <a href="#" class="size-[45px] md:size-[55px] mt-3
         hover:text-blue-500 hover:ring-1 hover:ring-offset-blue-600 duration-300
         bg-white rounded-full flex justify-center items-center">
          <i class="la-amazon-pay lab la-2x "></i>
        </a>
        <a href="#" class="size-[45px] md:size-[55px] mt-3 bg-white rounded-full flex justify-center items-center">AB</a>
        <a href="#" class="size-[45px] md:size-[55px] mt-3 bg-white rounded-full flex justify-center items-center">AB</a>
        <a href="#" class="size-[45px] md:size-[55px] mt-3 bg-white rounded-full flex justify-center items-center">AB</a>
      </div>

      <a href="#" title="Sign out" class="size-[45px] md:size-[55px] mt-3
       hover:text-red-500 hover:ring-1 hover:ring-offset-red-600 duration-300
      bg-white rounded-full flex justify-center items-center">

        <i class="la-sign-out la la-2x "></i>
      </a>

    </div>
    <div class=" py-2 px-3 grow-1 ms-[60px] md:ms-[85px]">
      <div class="h-[55px]  flex justify-between items-center ">
        <div class="w-[250px]  bg-white md:w-[380px] lg:w-[450px] py-1 rounded-[100vh] flex items-center">
          <span class="text-lg ms-2 me-2 grow-0 text-gray-400"><i class="la la-search"></i></span>
          <input type=" text" placeholder="Start searching here..."
                 class="placeholder:text-gray-400  grow-1 py-1 me-1 text-gray-500 outline-none">
        </div>
        <div class="bg-yellow-100">
          user menu ui
        </div>


      </div>
     <!-- <div class="size-[20rem] bg-red-200">Content 02</div>
      <div class="size-[20rem] bg-red-300">Content 03</div>
      <div class="size-[20rem] bg-red-400">Content 04</div>-->
    </div>
  </div>

  `
})
export class SalesDashboard {
}
