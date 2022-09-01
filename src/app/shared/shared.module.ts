import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarSegmentComponent } from './components/toolbar/toolbar-segment/toolbar-segment.component';
import { MaterialModule } from './modules/material.module';
import { EndDirective } from './directives/end.directive';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';

@NgModule({
  declarations: [ToolbarComponent, ToolbarSegmentComponent, CatFactComponent, EndDirective],
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
