import {Component} from '@angular/core';
import * as data from './../assets/data.json'

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    public data: any = (data as any).default;

    constructor() {
    }
}
