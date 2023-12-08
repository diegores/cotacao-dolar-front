import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app/app-routing.module';

platformBrowserDynamic().bootstrapModule(AppRoutingModule)
  .catch(err => console.error(err));

