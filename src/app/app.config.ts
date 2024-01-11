import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        if (config.src.endsWith('jpg')) return `${config.src}${config.width}`;

        return `${config.src}`;
      },
    },
    provideHttpClient(withFetch(), withJsonpSupport()),
  ],
};
