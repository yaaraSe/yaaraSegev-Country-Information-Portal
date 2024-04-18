import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { ProductReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'product', reducer: ProductReducer }),
    provideEffects(ProductEffect),
    provideHttpClient(),
  ],
};
