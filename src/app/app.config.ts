import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {EffectivSubscriptionTheme} from "../themes/EffectivSubscriptionTheme";
import {OliveTheme} from '../themes/OliveTheme';
import {PumkinTheme} from '../themes/PumkinTheme';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding() ),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch() ),
    providePrimeNG({
      ripple: true,
      theme : {
        preset: PumkinTheme,//OliveTheme
        options : {
          darkModeSelector: '.theme'
        }
      }
    })
  ]
};
