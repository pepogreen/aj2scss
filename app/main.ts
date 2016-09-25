import { bootstrap } from '@angular/platform-browser-dynamic';

import { APP_ROUTER_PROVIDERS } from '../app/routes.app';
import { MyAppComponent } from '../app/components/app.component';


bootstrap(MyAppComponent, [APP_ROUTER_PROVIDERS]);
