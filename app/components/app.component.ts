import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
	selector: 'aj2scss-app',
    templateUrl: '/app/templates/home.html',
    styleUrls: ['../app/styles/app.component.scss'],
    directives: [ROUTER_DIRECTIVES]
})
export class MyAppComponent {}
