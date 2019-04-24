import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { SubjectTableComponent } from "./components/subject-table/subject-table.component";

import { SortingStudentsPipe } from "./common/pipes/sorting-students.pipe";
import { PartyTimePipe } from "./common/pipes/party-tyme.pipe";
import { DefaultMarkPipe } from "./common/pipes/default-mark.pipe";

import { SharedModule } from "./shared/shared.module";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";

import { appReducer } from "./store/reducers/app.reducer";
import { StatisticComponent } from "./components/statistic/statistic.component";

import { NgSelectModule } from "@ng-select/ng-select";
import { MessageComponent } from './components/message/message.component';

import { EffectsModule } from '@ngrx/effects';
import { SubjectEffects } from './store/effects/subject.effects';
import { JournalEffects } from './store/effects/journal.effects';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    SubjectTableComponent,
    SortingStudentsPipe,
    PartyTimePipe,
    DefaultMarkPipe,
    StatisticComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([SubjectEffects, JournalEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: "router"}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgSelectModule
  ],
  providers: [],
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
