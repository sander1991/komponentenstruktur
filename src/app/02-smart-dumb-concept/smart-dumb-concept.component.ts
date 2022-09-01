import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatFact } from '../shared/models/cat-fact';
import { ComponentEvent } from '../shared/models/component-event';
import { CatFactService } from '../shared/services/cat-fact.service';

@Component({
  selector: 'app-smart-dumb-concept',
  templateUrl: './smart-dumb-concept.component.html',
  styleUrls: ['./smart-dumb-concept.component.css'],
})
export class SmartDumbConceptComponent {
  catFacts: BehaviorSubject<CatFact[]> = new BehaviorSubject<CatFact[]>([]);
  catFacts$: Observable<any> = this.catFacts.asObservable();

  @ViewChild('refreshButton') refreshBtn!: ElementRef;

  constructor(private catFactService: CatFactService) {}

  public onEvent(event: ComponentEvent) {
    switch (event.type) {
      case 'EVENT_ADD':
        this.addCatFact(event.data);
        break;
      default:
        console.error(`unknown event fetched: ${JSON.stringify(event)}`);
        break;
    }
  }

  private addCatFact(length: string) {
    // this.catFactService.getFact(length).pipe(tap((fact) => {
    //   const newArr = [this.catFacts.value, fact];
    //   this.catFacts.next(newArr);
    // })).subscribe();
  }
}
