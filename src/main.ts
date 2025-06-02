import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BlitzApp} from './app/app';

bootstrapApplication(BlitzApp, appConfig)
  .catch((err) => console.error(err));
