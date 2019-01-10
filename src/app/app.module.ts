import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WilmTrailsComponent } from './wilm-trails/wilm-trails.component';
import { DoverTrailsComponent } from './dover-trails/dover-trails.component';
import { RehobethTrailsComponent } from './rehobeth-trails/rehobeth-trails.component';

@NgModule({
  declarations: [
    AppComponent,
    WilmTrailsComponent,
    DoverTrailsComponent,
    RehobethTrailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
