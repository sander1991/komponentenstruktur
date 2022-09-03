import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-with-concept-content',
  templateUrl: './with-concept-content.component.html',
  styleUrls: ['./with-concept-content.component.css'],
})
export class WithConceptContentComponent {
  @Input() catFacts: CatFact[] = [];
  @Output() event = new EventEmitter<ComponentEvent>();
}
