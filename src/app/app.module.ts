import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {AnswerComponent} from './content/answer/answer.component';
import {QuestionComponent} from './content/question/question.component';
import {CookieService} from 'ngx-cookie-service';
import {MessageService} from './shared/message.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AnswerComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CookieService, MessageService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
