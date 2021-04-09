import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConditionalReactiveComponent } from './conditional-reactive/conditional-reactive.component';
import { CondtionalValidationComponent } from './condtional-validation/condtional-validation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserConditionalComponent } from './user-conditional/user-conditional.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ConditionalReactiveComponent,
    CondtionalValidationComponent,
    UserConditionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
