import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { CatFact } from 'src/app/shared/models/cat-fact';
import { ComponentEvent } from 'src/app/shared/models/component-event';
import { CatFactService } from 'src/app/shared/services/cat-fact.service';
import { Unsub } from 'src/app/shared/utils/Unsub';

@Component({
  selector: 'app-feature-facts',
  templateUrl: './feature-facts.component.html',
  styleUrls: ['./feature-facts.component.css'],
})
export class FeatureFactsComponent extends Unsub {
  catFacts: BehaviorSubject<CatFact[]> = new BehaviorSubject<CatFact[]>([]);
  catFacts$: Observable<CatFact[]> = this.catFacts.asObservable();

  constructor(private catFactService: CatFactService, private router: Router) {
    super();
  }

  public onEvent(event: ComponentEvent) {
    switch (event.type) {
      case 'EVENT_SHOW':
        this.router.navigate(['/facts/' + event.data.fact], {
          queryParams: { length: event.data.length },
        });
        break;
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

  private removeCatFact(catFact: CatFact) {
    const index = this.catFacts.value.indexOf(catFact);
    if (index > -1) {
      this.catFacts.value.splice(index, 1);
    }
  }
}
