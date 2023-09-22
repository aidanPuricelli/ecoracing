import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { HeroImgComponent } from './home/hero-img/hero-img.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { InstaPhotosComponent } from './home/insta-photos/insta-photos.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './home/contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    HeroImgComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    InstaPhotosComponent,
    SponsorsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
