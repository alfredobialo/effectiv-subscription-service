import {
  MinyHomeTheme,
  ZaraTheme,
  PumkinTheme,
  GrayMoreTheme,
  EffectivTheme,
  OliveTheme,
  OxbludTheme,
  PeppleTheme,
  AlvanaTheme
} from './AppThemes';
import {usePreset} from '@primeng/themes';
export const DEFAULT_THEME_KEY = "es.user.theme";
export const DEFAULT_DARK_KEY = "es.user.dark-mode";
export interface IChangeThemeModel {
  themePreset: any;
  themeName: string
}
export interface UserThemeSetting{
  themeName: string;
  isDarkMode: boolean;
}

export const AllThemes : IChangeThemeModel[] = [
  {
    themeName : "Zara Theme",
    themePreset : ZaraTheme,
  },{
    themeName : "GrayMore Theme",
    themePreset : GrayMoreTheme,
  },{
    themeName : "Miny Theme",
    themePreset : MinyHomeTheme,
  },{
    themeName : "Pumkin Theme",
    themePreset : PumkinTheme,
  },{
    themeName : "Effectiv Theme",
    themePreset : EffectivTheme,
  },
  {
    themeName : "Olive Theme",
    themePreset : OliveTheme,
  },
  {
    themeName : "Oxblud Theme",
    themePreset : OxbludTheme,
  },
  {
    themeName : "Pepple Theme",
    themePreset : PeppleTheme,
  },
  {
    themeName : "Alvana Theme",
    themePreset : AlvanaTheme,
  },
];
export const DEFAULT_THEME = AllThemes[7]; // OxBlud as Default
export function getTheme(themeName: string) {
  let theme = AllThemes.find((x) => {
    return x.themeName === themeName;
  });
  if(theme === undefined){
    theme = DEFAULT_THEME;
  }
  return theme;
}

export function saveTheme(themeName: string) {
  const theme= getTheme(themeName);
  localStorage.setItem(DEFAULT_THEME_KEY,themeName);
}
export function saveDarkMode(darkModeClass: string) {
  console.log("SAVE_DARK_MODE_THEME CALLED", darkModeClass);
   localStorage.setItem(DEFAULT_DARK_KEY,darkModeClass);
   const htmlElem = document.querySelector("html");
   if(darkModeClass === ""){

       htmlElem?.classList.remove("theme");
   }
   else{
     htmlElem?.classList.add("theme");
   }

}
export function applyTheme(themeName: string) {
  const theme = getTheme(themeName);
  usePreset(theme.themePreset);
}
export function applyDarkModeTheme() {
  const darkMode = localStorage.getItem(DEFAULT_DARK_KEY) ?? "";
  const htmlElem = document.querySelector("html");
  if(darkMode === ""){

    htmlElem?.classList.remove("theme");
  }
  else{
    htmlElem?.classList.add("theme");
  }
  console.log("APPLY_DARK_MODE_THEME CALLED", darkMode);
}
