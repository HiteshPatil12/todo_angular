import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { StudentComponent } from './student/student.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { service1 } from './service1.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent,
    StudentComponent,
    Component1Component,
    Component2Component,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [service1],
  bootstrap: [AppComponent]
})
export class AppModule { }
