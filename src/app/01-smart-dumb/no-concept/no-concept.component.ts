import { Component } from '@angular/core';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-no-concept',
  templateUrl: './no-concept.component.html',
  styleUrls: ['./no-concept.component.css'],
})
export class NoConceptComponent {
  catFacts: CatFact[] = [];

  public onEvent(event: ComponentEvent) {
    switch (event.type) {
      case 'EVENT_ADD':
        this.catFacts.push(event.data);
        break;
      default:
        console.error(`unknown event fetched: ${JSON.stringify(event)}`);
        break;
    }
  }
}
