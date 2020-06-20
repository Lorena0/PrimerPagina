import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentedosComponent } from './componentedos/componentedos.component';
import { ComponenteunoComponent } from './componenteuno/componenteuno.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentedosComponent,
    ComponenteunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
