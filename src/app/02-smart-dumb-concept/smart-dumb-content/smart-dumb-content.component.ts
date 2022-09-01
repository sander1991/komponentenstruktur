import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-smart-dumb-content',
  templateUrl: './smart-dumb-content.component.html',
  styleUrls: ['./smart-dumb-content.component.css'],
})
export class SmartDumbContentComponent {
  @Input() catFacts: CatFact[] = [];
  @Output() event = new EventEmitter<ComponentEvent>();
}
