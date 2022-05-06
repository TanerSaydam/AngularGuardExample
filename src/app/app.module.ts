import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    UserEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
