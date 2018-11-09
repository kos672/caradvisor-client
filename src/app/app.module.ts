import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {MessageComponent} from './content/message/message.component';
import {CookieService} from 'ngx-cookie-service';
import {MessageService} from './shared/message.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CountryPrefsService} from './shared/country-prefs.service';
import {FamilyService} from './shared/family.service';
import {CarSelectionService} from './shared/car-selection.service';
import {ExperienceService} from './shared/experience.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CookieService, MessageService, HttpClient, CountryPrefsService, FamilyService, CarSelectionService, ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
