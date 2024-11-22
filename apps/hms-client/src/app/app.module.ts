import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    NxWelcomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
  ],
  imports: [CommonModule, MenubarModule, RouterModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
