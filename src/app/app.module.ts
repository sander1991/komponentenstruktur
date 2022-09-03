import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModuleConceptModule } from './03-feature-module-concept/feature-module-concept.module';

import { HttpClientModule } from '@angular/common/http';
import { NoConceptContentComponent } from './01-no-concept/no-concept-content/no-concept-content.component';
import { NoConceptToolbarComponent } from './01-no-concept/no-concept-toolbar/no-concept-toolbar.component';
import { NoConceptComponent } from './01-no-concept/no-concept.component';
import { SmartDumbConceptComponent } from './02-smart-dumb-concept/smart-dumb-concept.component';
import { SmartDumbContentComponent } from './02-smart-dumb-concept/smart-dumb-content/smart-dumb-content.component';
import { SmartDumbToolbarComponent } from './02-smart-dumb-concept/smart-dumb-toolbar/smart-dumb-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FeatureModuleConceptModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    NoConceptComponent,
    NoConceptToolbarComponent,
    NoConceptContentComponent,
    SmartDumbConceptComponent,
    SmartDumbContentComponent,
    SmartDumbToolbarComponent,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
