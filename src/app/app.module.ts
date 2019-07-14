import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InteriorComponent } from './components/interior/interior.component';
import { GruhComponent } from './components/gruh/gruh.component';
import { RedComponent } from './components/red/red.component';
import { IqComponent } from './components/iq/iq.component';
import { HolidaysComponent } from './components/holidays/holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    InteriorComponent,
    GruhComponent,
    RedComponent,
    IqComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
