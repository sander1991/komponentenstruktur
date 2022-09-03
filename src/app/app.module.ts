import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartDumbModule } from './01-smart-dumb/smart-dumb.module';

import { HttpClientModule } from '@angular/common/http';
import { FeatureModuleConceptModule } from './02-feature-module-concept/feature-module-concept.module';
import { SolidModule } from './03-solid/solid.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeatureModuleConceptModule,
    SmartDumbModule,
    SolidModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
