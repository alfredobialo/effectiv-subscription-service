import {Component, signal,output,inject } from '@angular/core';
import {MenuStateService} from '../services/MenuStateService';

@Component({
  selector: 'AppUserNavbar',
  standalone: true,
  template: `
    <div class="h-[58px]  bg-slate-200  flex justify-between items-center sticky duration-300  top-0 ">
      <div class="w-[250px] shadow bg-white md:w-[380px] lg:w-[450px] py-1 rounded-[100vh] flex items-center">
        <span class="text-lg ms-2 me-2 grow-0 text-gray-400"><i class="la la-search"></i></span>
        <input type=" text" placeholder="Start searching here..."
               class="placeholder:text-gray-400  grow-1 py-1 me-1 text-gray-500 outline-none">
      </div>
      <div class="bg-white  md:block py-2 px-2 md:px-3 rounded-4xl shadow">
        <button (click)="toggleMenu()"
                class="px-4 py-2 bg-amber-300 ring-amber-600 ring-2 rounded-full cursor-pointer
               hover:bg-amber-600 hover:ring-amber-400 duration-300 text-md  font-semibold">
          <i class="la la-bell-o"></i> {{ showMenu() }}
        </button>
      </div>


    </div>
  `
})
export class AppUserNavbar {
  menuState = inject(MenuStateService);
  showMenu = this.menuState.showMenu;

  onMenuToggle = output<boolean>();
  toggleMenu() {
    if(this.showMenu()) {
      this.menuState.showMenu.set(false);
    }
    else{
      this.menuState.showMenu.set(true);
    }
    console.log("Menu State is : " + this.menuState.showMenu());
    this.onMenuToggle.emit(this.showMenu());
  }
}
