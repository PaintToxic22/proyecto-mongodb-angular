import 'zone.js';
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

const bootstrap = (context?: BootstrapContext) => bootstrapApplication(AppComponent, appConfig, context);

export default bootstrap;
