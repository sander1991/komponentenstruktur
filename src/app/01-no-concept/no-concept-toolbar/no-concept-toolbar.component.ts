import { Component, EventEmitter, Output } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Unsub } from 'src/app/shared/utils/Unsub';
import { ComponentEvent } from '../../shared/models/component-event';
import { CatFactService } from '../../shared/services/cat-fact.service';

@Component({
  selector: 'app-no-concept-toolbar',
  templateUrl: './no-concept-toolbar.component.html',
  styleUrls: ['./no-concept-toolbar.component.css'],
})
export class NoConceptToolbarComponent extends Unsub {
  @Output() event = new EventEmitter<ComponentEvent>();

  constructor(private catFactService: CatFactService) {
    super();
  }

  public request(length: string) {
    this.catFactService
      .getFact(length)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((fact) => {
        this.event.emit({ type: 'EVENT_ADD', data: fact });
      });
  }
}
