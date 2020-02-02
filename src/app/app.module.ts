import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BluuwebFlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
