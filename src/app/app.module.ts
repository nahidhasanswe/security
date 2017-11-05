import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http,HttpModule,RequestOptions, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DataService } from "./services/data.service";

import { MatInputModule, MatSelectModule, MatStepperModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { MatTooltipModule } from '@angular/material';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { TermsComponent } from './dialogs/terms/terms.component';


export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
  }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    TagInputModule,
    MatStepperModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  entryComponents:[
    TermsComponent
  ],
  providers: [DataService,
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
