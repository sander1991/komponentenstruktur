import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { ToolbarSegmentComponent } from './components/toolbar/toolbar-segment/toolbar-segment.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EndDirective } from './directives/end.directive';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    ToolbarSegmentComponent,
    CatFactComponent,
    EndDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    ToolbarComponent,
    ToolbarSegmentComponent,
    CatFactComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    EndDirective,
  ],
})
export class SharedModule {}
