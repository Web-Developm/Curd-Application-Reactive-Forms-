import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConditionalReactiveComponent } from './conditional-reactive/conditional-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ConditionalReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
