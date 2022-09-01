import { Component, Output, EventEmitter } from '@angular/core';
import { ComponentEvent } from '../../shared/models/component-event';
import { CatFactService } from '../../shared/services/cat-fact.service';

@Component({
  selector: 'app-no-concept-toolbar',
  templateUrl: './no-concept-toolbar.component.html',
  styleUrls: ['./no-concept-toolbar.component.css'],
})
export class NoConceptToolbarComponent {
  @Output() event = new EventEmitter<ComponentEvent>();

  constructor(private catFactService: CatFactService) {}

  public request(length: string) {
    this.catFactService.getFact(length).subscribe((fact) => {
      this.event.emit({ type: 'EVENT_ADD', data: fact });
    });
  }
}
