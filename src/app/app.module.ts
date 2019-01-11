import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';  


import { AppComponent } from './app.component';
import { WilmTrailsComponent } from './wilm-trails/wilm-trails.component';
import { DoverTrailsComponent } from './dover-trails/dover-trails.component';
import { RehobethTrailsComponent } from './rehobeth-trails/rehobeth-trails.component';

const appRoutes: Routes = [
  {path: 'wilmington', component: WilmTrailsComponent },
     {path: 'dover', component: DoverTrailsComponent},
     {path: 'rehobeth', component: RehobethTrailsComponent},
    
];
@NgModule({
  declarations: [
    AppComponent,
    WilmTrailsComponent,
    DoverTrailsComponent,
    RehobethTrailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
     appRoutes
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
