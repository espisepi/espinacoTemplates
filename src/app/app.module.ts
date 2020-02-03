import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurecssComponent } from './components/purecss/purecss.component';

@NgModule({
  declarations: [
    AppComponent,
    BluuwebFlexboxComponent,
    PurecssComponent
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
