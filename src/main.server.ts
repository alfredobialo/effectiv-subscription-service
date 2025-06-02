import { bootstrapApplication } from '@angular/platform-browser';
import { BlitzApp} from './app/app';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(BlitzApp, config);

export default bootstrap;
