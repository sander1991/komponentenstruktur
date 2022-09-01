import { Component, Input } from '@angular/core';
import { CatFact } from '../../shared/models/cat-fact';

@Component({
  selector: 'app-no-concept-content',
  templateUrl: './no-concept-content.component.html',
  styleUrls: ['./no-concept-content.component.css'],
})
export class NoConceptContentComponent {
  @Input() catFacts: CatFact[] = [];

  public removeFact(index: number) {
    this.catFacts.splice(index, 1);
  }
}
