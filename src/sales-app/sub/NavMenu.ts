import {Component, input, effect} from '@angular/core';

@Component({
  standalone: true,
  selector: 'NavMenu',
  template: `
    <a href="#" class="size-[45px] md:size-[55px] mt-3
         hover:text-primary-500 hover:ring-1 hover:ring-offset-primary-600 duration-300
           hover:shadow-md hover:shadow-neutral-800
         dark:bg-surface-600 bg-white rounded-full flex justify-center items-center" [class]="{'nav-menu-active': isActive()}">
      <i class=" la-2x " [class]="iconClass() ?? 'la-amazon-pay lab' "></i>
    </a>`
})
export class NavMenu {
  isActive = input(false);
  iconClass = input<string>();

  constructor() {
  }

}

/*
*  Template Binding /  Expression are done using  {{ expression or typescript variable }}
* Attribute Binding : [html-attribute or custom attr] =>
* */
