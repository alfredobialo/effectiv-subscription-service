import {MinyHomeTheme, ZaraTheme, PumkinTheme, GrayMoreTheme, EffectivTheme, OliveTheme, OxbludTheme, PeppleTheme} from './AppThemes';


export interface IChangeThemeModel {
  themePreset: any;
  themeName: string
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
];
