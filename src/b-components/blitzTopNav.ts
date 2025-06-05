import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'BlitzTopNav',
  template: `
    <div class="flex justify-between items-center h-[45px]">
      <div class="sm:min-w-[250px] md:w-[60%] flex ">
        <h1 class="text-blitz-primary text-2xl uppercase font-bold mr-10 md:mr-18">Blitz</h1>
        <div class="flex justify-between items-center space-x-3 md:space-x-8">
          @for(m of menus; track m){
           <a href="#" class="uppercase font-roboto-flex text-[0.78rem] " [class.hidden]="$last" [class.md:inline]="$last">
             {{m}}@if(!$last){ &nbsp; <i class="las la-angle-down hidden md:inline"></i>}
           </a>
          }
        </div>
      </div>
      <div class="md:flex justify-between items-center  ">
        <div (click)="toggleMenu()" class=" inline-block w-[30px] md:w-[50px] h-[8px] border-b-2 border-t-2 border-black cursor-pointer md:me-6">

        </div>
        <a href="#" class="uppercase hidden md:inline bg-black text-white px-3 py-1 rounded-[100vh]">Contact Us</a>
      </div>
    </div>
    @if(showMenu()){
      <div class="bg-black/90 duration-200 w-[180px] md:w-[260px] absolute z-50 right-0 top-0
      rounded-bl-4xl
      text-white text-4xl text-shadow-2xs flex flex-col justify-start items-start min-h-[300px]">
        <div class="self-end p-2">
          <button class="cursor-pointer" (click)="toggleMenu()"> <i class="las la-times"></i></button>

        </div>
        <ul class="text-lg">
          <li><a href="#" class="px-4 py-3">Link 1</a></li>
          <li><a href="#" class="px-4 py-3">Link 2</a></li>
          <li><a href="#" class="px-4 py-3">Link 3</a></li>
          <li><a href="#" class="px-4 py-3">Link 4</a></li>
          <li><a href="#" class="px-4 py-3">Link 5</a></li>
        </ul>
      </div>
    }

  `,
})
export class BlitzTopNav {
  menus = ['services', 'projects', 'about'];
  showMenu = signal(false);
  toggleMenu = () => {
    console.log("Menu Clicked!");
    if(this.showMenu()){
      this.showMenu.set(false);
    }
    else{
      this.showMenu.set(true);
    }
  }
}
