import {definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';
export const PumkinTheme = definePreset(Aura, {

  "semantic": {
  "primary": {
    "50": "#fcf5f3",
      "100": "#f0cfc4",
      "200": "#e4aa96",
      "300": "#d98468",
      "400": "#cd5f39",
      "500": "#c1390b",
      "600": "#a43009",
      "700": "#872808",
      "800": "#6a1f06",
      "900": "#4d1704",
      "950": "#300e03"
  },
  "colorScheme": {
    "light": {
      "surface": {
        "0": "#ffffff",
          "50": "#f6f5f5",
          "100": "#d6cece",
          "200": "#b5a6a6",
          "300": "#957f7f",
          "400": "#745858",
          "500": "#543131",
          "600": "#472a2a",
          "700": "#3b2222",
          "800": "#2e1b1b",
          "900": "#221414",
          "950": "#150c0c"
      },
      "primary": {
        "color": "{primary.500}",
          "contrastColor": "#ffffff",
          "hoverColor": "{primary.600}",
          "activeColor": "{primary.700}"
      }
    },
    "dark": {
      "surface": {
        "0": "#ffffff",
          "50": "#f5f4f3",
          "100": "#cdc9c7",
          "200": "#a59e9b",
          "300": "#7d736f",
          "400": "#554842",
          "500": "#2d1d16",
          "600": "#261913",
          "700": "#1f140f",
          "800": "#19100c",
          "900": "#120c09",
          "950": "#0b0706"
      },
      "primary": {
        "color": "{primary.400}",
          "contrastColor": "{surface.900}",
          "hoverColor": "{primary.300}",
          "activeColor": "{primary.200}"
      }
    }
  }
}
});
export const EffectivTheme = definePreset(Aura,
  {
    "semantic": {
      "primary": {
        "50": "#f3f7fb",
        "100": "#c6d9eb",
        "200": "#99bbdb",
        "300": "#6c9dcb",
        "400": "#3f7fbb",
        "500": "#1261ab",
        "600": "#0f5291",
        "700": "#0d4478",
        "800": "#0a355e",
        "900": "#072744",
        "950": "#05182b"
      },
      "colorScheme": {
        "light": {
          "surface": {
            "0": "#ffffff",
            "50": "#f9f9f9",
            "100": "#e1e3e4",
            "200": "#cacecf",
            "300": "#b3b8ba",
            "400": "#9ba2a5",
            "500": "#848c90",
            "600": "#70777a",
            "700": "#5c6265",
            "800": "#494d4f",
            "900": "#35383a",
            "950": "#212324"
          }
        },
        "dark": {
          "surface": {
            "0": "#ffffff",
            "50": "#f8f8f8",
            "100": "#dbdbdb",
            "200": "#bfbfbf",
            "300": "#a3a3a3",
            "400": "#878787",
            "500": "#6b6b6b",
            "600": "#5b5b5b",
            "700": "#4b4b4b",
            "800": "#3b3b3b",
            "900": "#2b2b2b",
            "950": "#1b1b1b"
          }
        }
      }
    }
  }
);
export const ZaraTheme = definePreset(Aura,
  {
    "semantic": {
      "primary": {
        "50": "#fef4fd",
        "100": "#fcc9f3",
        "200": "#fa9fea",
        "300": "#f875e0",
        "400": "#f54ad7",
        "500": "#f320cd",
        "600": "#cf1bae",
        "700": "#aa1690",
        "800": "#861271",
        "900": "#610d52",
        "950": "#3d0833"
      },
      "colorScheme": {
        "light": {
          "surface": {
            "0": "#ffffff",
            "50": "#faf7f9",
            "100": "#e7d9e2",
            "200": "#d4bacc",
            "300": "#c19cb5",
            "400": "#ae7d9f",
            "500": "#9b5f88",
            "600": "#845174",
            "700": "#6d435f",
            "800": "#55344b",
            "900": "#3e2636",
            "950": "#271822"
          }
        },
        "dark": {
          "surface": {
            "0": "#ffffff",
            "50": "#fbf7fb",
            "100": "#ecdbeb",
            "200": "#ddbedb",
            "300": "#cfa1cc",
            "400": "#c085bc",
            "500": "#b168ac",
            "600": "#965892",
            "700": "#7c4978",
            "800": "#61395f",
            "900": "#472a45",
            "950": "#2c1a2b"
          }
        }
      }
    }
  });
export const MinyHomeTheme = definePreset(Aura,{
  "semantic": {
    "primary": {
      "50": "#f5fafe",
      "100": "#cfe8fb",
      "200": "#a9d6f9",
      "300": "#84c4f6",
      "400": "#5eb2f3",
      "500": "#38a0f0",
      "600": "#3088cc",
      "700": "#2770a8",
      "800": "#1f5884",
      "900": "#164060",
      "950": "#0e283c"
    },
    "colorScheme": {
      "light": {
        "surface": {
          "0": "#ffffff",
          "50": "#f4f6f8",
          "100": "#c9d6db",
          "200": "#9fb5bf",
          "300": "#7495a3",
          "400": "#4a7487",
          "500": "#1f546b",
          "600": "#1a475b",
          "700": "#163b4b",
          "800": "#112e3b",
          "900": "#0c222b",
          "950": "#08151b"
        }
      },
      "dark": {
        "surface": {
          "0": "#ffffff",
          "50": "#f4f5f6",
          "100": "#c9cfd3",
          "200": "#9fa9b0",
          "300": "#74828d",
          "400": "#4a5c6a",
          "500": "#1f3647",
          "600": "#1a2e3c",
          "700": "#162632",
          "800": "#111e27",
          "900": "#0c161c",
          "950": "#080e12"
        }
      }
    }
  }
});
export const GrayMoreTheme = definePreset(Aura,
  {
    "semantic": {
      "primary": {
        "50": "#f9f8f8",
        "100": "#e1dfdf",
        "200": "#c9c5c5",
        "300": "#b1acac",
        "400": "#999292",
        "500": "#817979",
        "600": "#6e6767",
        "700": "#5a5555",
        "800": "#474343",
        "900": "#343030",
        "950": "#201e1e"
      },
      "colorScheme": {
        "light": {
          "surface": {
            "0": "#ffffff",
            "50": "#f9f8f8",
            "100": "#e1e0e0",
            "200": "#cac7c7",
            "300": "#b2aeae",
            "400": "#9b9595",
            "500": "#837c7c",
            "600": "#6f6969",
            "700": "#5c5757",
            "800": "#484444",
            "900": "#343232",
            "950": "#211f1f"
          }
        },
        "dark": {
          "surface": {
            "0": "#ffffff",
            "50": "#f7f7f7",
            "100": "#d9d7d7",
            "200": "#bab7b7",
            "300": "#9c9797",
            "400": "#7d7878",
            "500": "#5f5858",
            "600": "#514b4b",
            "700": "#433e3e",
            "800": "#343030",
            "900": "#262323",
            "950": "#181616"
          }
        }
      }
    }
  }
);
export const OliveTheme =  definePreset(Aura , {
  primitive : {

  },
  semantic:{
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}'
    },
    colorScheme : {
      dark : {
        surface : {

        }
      }
    }
  }
});
