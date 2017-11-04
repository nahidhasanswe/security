import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';

import { MatInputModule, MatSelectModule, MatStepperModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    TagInputModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
