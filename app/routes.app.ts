import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent } from '../app/components/about.component';
import { MyAppComponent } from '../app/components/app.component';

const routes: RouterConfig = [
	{ path: '', component: MyAppComponent },
	{ path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];


