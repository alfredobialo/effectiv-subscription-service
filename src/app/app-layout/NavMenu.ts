import {Component, input, effect, booleanAttribute} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  standalone: true,
  selector: 'NavMenu',
  imports: [
    RouterLink,
    RouterLinkActive,
    TooltipModule
  ],
  template: `
    <a [routerLink]="routerLink()" [pTooltip]="title()" [tooltipOptions]="{tooltipPosition : 'right'}" class="size-[45px] md:size-[55px] mt-3
         dark:hover:text-primary-300 hover:text-primary-600 hover:ring-2 hover:ring-offset-primary-600 duration-300
           hover:shadow-md hover:shadow-neutral-800 focus:scale-90 hover:scale-90 focus:translate-y-1.5 hover:translate-y-1.5 outline-primary-500
         dark:bg-surface-600 bg-white rounded-full flex justify-center items-center" routerLinkActive="nav-menu-active" [routerLinkActiveOptions]="{exact : true}" >
      <i class=" la-2x " [class]="iconClass() ?? 'la-amazon-pay lab' "></i>
    </a>`
})
export class NavMenu {
  isActive = input(false, {transform : x => booleanAttribute(x)});
  iconClass = input<string>();
  routerLink= input<string>("");
  title = input<string>("");
  constructor() {
  }

}

/*
*  Template Binding /  Expression are done using  {{ expression or typescript variable }}
* Attribute Binding : [html-attribute or custom attr] =>
* */
