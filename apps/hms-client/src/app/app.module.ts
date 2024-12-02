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

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { DentallandingpageComponent } from './dentallandingpage/dentallandingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule,
    MenubarModule,
    CardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
