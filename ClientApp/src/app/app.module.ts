import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ExperienceComponent} from "./experience/experience.component";
import {ExpertiseComponent} from './expertise/expertise.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {SafePipe} from './pipes/safe.pipe';
import {AchievementsComponent} from './achievements/achievements.component';
import {EducationComponent} from './education/education.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ExpertiseComponent,
        ExperienceComponent,
        ContactInfoComponent,
        AchievementsComponent,
        EducationComponent,
        SafePipe
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
