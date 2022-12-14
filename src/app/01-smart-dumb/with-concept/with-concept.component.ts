import { Component } from '@angular/core';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';
import { CatFactService } from 'src/app/shared/services/cat-fact.service';
import { Unsub } from 'src/app/shared/utils/Unsub';
@Component({
  selector: 'app-with-concept',
  templateUrl: './with-concept.component.html',
  styleUrls: ['./with-concept.component.css'],
})
export class WithConceptComponent extends Unsub {
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
