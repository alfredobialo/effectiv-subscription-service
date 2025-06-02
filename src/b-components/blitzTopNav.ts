import {Component} from '@angular/core';

@Component({
  selector: 'BlitzTopNav',
  template: `
    <div class="flex justify-between items-center h-[45px]">
      <div class="min-w-[250px] w-[54%] md:w-[60%] flex ">
        <h1 class="text-blitz-primary text-2xl uppercase font-bold mr-10 md:mr-18">Blitz</h1>
        <div class="flex justify-between items-center space-x-8">
          @for(m of menus; track m){
           <a href="#" class="uppercase font-roboto-flex text-[0.78rem]" [class]="{'hidden md:block':$last}">
             {{m}}@if(!$last){ &nbsp; <i class="las la-angle-down hidden md:inline"></i>}
           </a>
          }
        </div>
      </div>
      <div class="hidden md:flex justify-between items-center  w-[190px] ">
        <div class="w-[40px] h-[8px] border-b-2 border-t-2 border-black cursor-pointer"></div>
        <a href="#" class="uppercase bg-black text-white px-3 py-1 rounded-[100vh]">Contact Us</a>
      </div>
    </div>
  `,
})
export class BlitzTopNav {
  menus = ['services', 'projects', 'about'];
}
