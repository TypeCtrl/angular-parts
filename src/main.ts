import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendar,
  faArrowAltCircleDown,
  faStar,
  faFileArchive,
  faTags,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

library.add(
  faCalendar,
  faArrowAltCircleDown,
  faStar,
  faFileArchive,
  faTags,
  faTag,
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
