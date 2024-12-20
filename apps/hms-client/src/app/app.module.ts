import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';


import { DentallandingpageComponent } from './dentallandingpage/dentallandingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DentallandingpageService } from './dentallandingpage/dentallandingpage.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    NxWelcomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    DentallandingpageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
    CalendarModule,
    ButtonModule,
  ],
  providers: [
    DentallandingpageService,
    MessageService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
