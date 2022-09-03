import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-with-concept-toolbar',
  templateUrl: './with-concept-toolbar.component.html',
  styleUrls: ['./with-concept-toolbar.component.css'],
})
export class WithConceptToolbarComponent {
  @Output() event = new EventEmitter<ComponentEvent>();
}
