import {Component, computed, signal} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Menu} from 'primeng/menu';
import {RippleModule} from 'primeng/ripple';
import {componentCreatedAnimation} from '../../../shared/animations/CustomAnimations';
import {usePreset} from  "@primeng/themes";
import {IChangeThemeModel, AllThemes} from '../../../themes/ChangeThemeModel';
@Component({
  selector: 'ManageWarehouses',
  imports: [ButtonModule, Menu, RippleModule],
  template: `

    <p >
      manage-warehouses works!
      <img [src]="mainImg" class="w-[300px] duration-300 transition-all" >
      <br>
      <p-menu #themeMenu [model]="menuThemes()" ></p-menu>
      <button pButton pRipple (click)="themeMenu.toggle($event)">Theme PrimeNg</button>
    </p>
  `,
  styles: `

  `,
  animations: [
    componentCreatedAnimation
  ],
  host: {
    "[@cmp-enter]": "true",
    "class" : "p-8 text-2xl block",
    "ngSkipHydration" : "true"
  }
})
export class ManageWarehouses {
  img1 = "images/munachi-ads-02.png";
  img2 = "images/chioma-iwuh2.jpg";
  mainImg  = this.img1;
  themes  = signal<IChangeThemeModel[]>(AllThemes);
  menuThemes = computed(() => {
    return this.themes().map(x => ({
      label: x.themeName,
      command : ()=> this.changeTheme(x.themePreset),
      title : x.themeName

    }));
  });
  swapImages(){
  }

  changeTheme(preset: any) {
    usePreset(preset);
  }
}
