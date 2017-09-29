import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogHelloWorldComponent } from './dialog-hello-world/dialog-hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogHelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
