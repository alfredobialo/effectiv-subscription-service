import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {Menu} from 'primeng/menu';
import {AllThemes, IChangeThemeModel, saveTheme} from './ChangeThemeModel';
import {usePreset} from '@primeng/themes';

@Component({
  selector: 'theme-selector, ThemeSelector',
  imports: [
    Menu
  ],
  template: `
      <p-menu #themeMenu [model]="menuThemes()" ngSkipHydration  [popup]="true"></p-menu>
      <button class="btn-circle" (click)="themeMenu.toggle($event)">
        <i class="la la-pen-fancy la-2x"></i>
      </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemeSelector {
  themes = signal<IChangeThemeModel[]>(AllThemes);
  menuThemes = computed(() => {
    return this.themes().map(x => ({
      label: x.themeName,
      command: () => this.changeTheme(x),
      title: x.themeName

    }));
  });
  changeTheme(theme: IChangeThemeModel) {
    usePreset(theme.themePreset);
    saveTheme(theme.themeName);
  }
}
