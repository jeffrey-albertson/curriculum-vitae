import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponent {
    private title = 'Jeffrey Albertson';

    constructor(private titleService: Title) {
        super();
        this.titleService.setTitle(this.title);
    }
}

