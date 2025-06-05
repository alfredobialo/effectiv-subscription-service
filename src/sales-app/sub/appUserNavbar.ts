import {Component} from '@angular/core';

@Component({
  selector: 'AppUserNavbar',
  template: `
    <div class="h-[58px]  bg-slate-200  flex justify-between items-center fixed left-[60px] md:left-[97px] right-3  top-0 ">
      <div class="w-[250px]  bg-white md:w-[380px] lg:w-[450px] py-1 rounded-[100vh] flex items-center">
        <span class="text-lg ms-2 me-2 grow-0 text-gray-400"><i class="la la-search"></i></span>
        <input type=" text" placeholder="Start searching here..."
               class="placeholder:text-gray-400  grow-1 py-1 me-1 text-gray-500 outline-none">
      </div>
      <div class="bg-yellow-100">
        user menu ui
      </div>


    </div>
  `
})
export class AppUserNavbar {
}
