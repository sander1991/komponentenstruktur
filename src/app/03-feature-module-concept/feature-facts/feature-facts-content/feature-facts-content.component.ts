import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-feature-facts-content',
  templateUrl: './feature-facts-content.component.html',
  styleUrls: ['./feature-facts-content.component.css'],
})
export class FeatureFactsContentComponent {
  @Input() catFacts: CatFact[] = [];
  @Output() event = new EventEmitter<ComponentEvent>();
}
