import { Component } from '@angular/core';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { CatFact } from '../shared/models/cat-fact';
import { ComponentEvent } from '../shared/models/component-event';
import { CatFactService } from '../shared/services/cat-fact.service';
import { Unsub } from '../shared/utils/Unsub';

@Component({
  selector: 'app-smart-dumb-concept',
  templateUrl: './smart-dumb-concept.component.html',
  styleUrls: ['./smart-dumb-concept.component.css'],
})
export class SmartDumbConceptComponent extends Unsub {
  catFacts: BehaviorSubject<CatFact[]> = new BehaviorSubject<CatFact[]>([]);
  catFacts$: Observable<CatFact[]> = this.catFacts.asObservable();

  constructor(private catFactService: CatFactService) {
    super();
  }

  public onEvent(event: ComponentEvent) {
    switch (event.type) {
      case 'EVENT_ADD':
        this.addCatFact(event.data);
        break;
      case 'EVENT_DELETE':
        this.removeCatFact(event.data);
        break;
      default:
        console.error(`unknown event fetched: ${JSON.stringify(event)}`);
        break;
    }
  }

  private addCatFact(length: string) {
    this.catFactService
      .getFact(length)
      .pipe(
        takeUntil(this.unsubscribe$),
        tap((fact) => {
          const newArr = [...this.catFacts.value, fact];
          this.catFacts.next(newArr);
        })
      )
      .subscribe();
  }

  private removeCatFact(index: number) {
    this.catFacts.value.splice(index, 1);
  }
}
