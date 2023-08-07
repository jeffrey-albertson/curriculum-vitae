import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styles: [
        'h1 { margin: 0; font-size: 2.5em; text-align: center; font-family: Candara, Verdana, serif;}',
        'div { text-align: center; }',
        '.contact-info { font-size: 1.25em; padding:15px 0;line-height: 1.6; }',
    ]
})
export class ContactInfoComponent extends AppComponent implements OnInit {
    public mailtoUrl: string = '';

    constructor() {
        super();
        let email = this.data.contact.email;
        this.mailtoUrl = `mailto:${email}`;
    }

    ngOnInit(): void {
    }
}
