import {Component, OnInit} from '@angular/core';
import {AppComponent} from "./../app.component";

@Component({
    selector: 'app-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent extends AppComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit(): void {
    }
}
