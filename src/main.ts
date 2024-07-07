// Import necessary Angular modules and functions
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root AppModule and environment configuration
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable production mode if environment.production is true
if (environment.production) {
  enableProdMode();
}

// Bootstrap the AppModule using platformBrowserDynamic
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Catch and log any bootstrap errors
