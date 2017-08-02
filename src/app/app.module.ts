import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DropdownModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    BrowserModule,
    DynamicFormModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
