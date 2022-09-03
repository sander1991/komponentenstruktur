import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-feature-facts-toolbar',
  templateUrl: './feature-facts-toolbar.component.html',
  styleUrls: ['./feature-facts-toolbar.component.css'],
})
export class FeatureFactsToolbarComponent {
  @Output() event = new EventEmitter<ComponentEvent>();
}
