import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogHelloWorldComponent } from './dialog-hello-world/dialog-hello-world.component';
import { OurMaterialDesignModule } from './our-md-module';

@NgModule({
  declarations: [
    AppComponent,
    DialogHelloWorldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OurMaterialDesignModule
  ],
  entryComponents: [
    DialogHelloWorldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
