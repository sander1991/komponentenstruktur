import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoConceptComponent } from './01-no-concept/no-concept.component';
import { NoConceptToolbarComponent } from './01-no-concept/no-concept-toolbar/no-concept-toolbar.component';
import { NoConceptContentComponent } from './01-no-concept/no-concept-content/no-concept-content.component';
import { SmartDumbConceptComponent } from './02-smart-dumb-concept/smart-dumb-concept.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NoConceptComponent,
    NoConceptToolbarComponent,
    NoConceptContentComponent,
    SmartDumbConceptComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}