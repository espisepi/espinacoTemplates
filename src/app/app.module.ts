import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluuwebFlexboxComponent } from './components/bluuweb-flexbox/bluuweb-flexbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurecssComponent } from './components/purecss/purecss.component';
import { AppleWatchComponent } from './components/apple-watch/apple-watch.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { LoginComponent } from './components/login/login.component';
import { Cube3dComponent } from './components/cube3d/cube3d.component';
import { Rotation3dComponent } from './components/rotation3d/rotation3d.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { WaterEffectComponent } from './components/water-effect/water-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    BluuwebFlexboxComponent,
    PurecssComponent,
    AppleWatchComponent,
    SidebarMenuComponent,
    BakeryComponent,
    LoginComponent,
    Cube3dComponent,
    Rotation3dComponent,
    Demo1Component,
    RelojComponent,
    WaterEffectComponent
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
