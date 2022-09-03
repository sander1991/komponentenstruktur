import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatFact } from '../../models/cat-fact';
import { ComponentEvent } from '../../models/component-event';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css'],
})
export class CatFactComponent {
  @Input() catFact!: CatFact;
  @Output() event = new EventEmitter<ComponentEvent>();
}
