import { Component } from '@angular/core';

@Component({
    selector: 'router-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent{
    query: string;
    
    constructor() { }

}