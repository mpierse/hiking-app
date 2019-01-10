import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WilmTrailsComponent } from './wilm-trails/wilm-trails.component';

@NgModule({
  declarations: [
    AppComponent,
    WilmTrailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
