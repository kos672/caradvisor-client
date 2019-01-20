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
import {PayForComfortService} from './shared/pay-for-comfort.service';
import {ProcessComponent} from './process/process.component';
import {ResultComponent} from './result/result.component';
import {AppRoutingModule} from './shared/app-routing.module';
import {CarListComponent} from './result/car-list/car-list.component';
import {CarComponent} from './result/car/car.component';
import {CarDetailComponent} from './result/car-detail/car-detail.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import {LoginActivate} from './login/login-activate';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MessageComponent,
    ProcessComponent,
    ResultComponent,
    CarListComponent,
    CarComponent,
    CarDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService, MessageService,
    HttpClient, CountryPrefsService,
    FamilyService, CarSelectionService,
    ExperienceService, PayForComfortService, AuthService, LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule {
}
