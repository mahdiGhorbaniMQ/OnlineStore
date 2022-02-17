import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuContainerComponent } from 'src/menu/menu-container/menu-container.component';
import { MenuModule } from 'src/menu/menu.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
