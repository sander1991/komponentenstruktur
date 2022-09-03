import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { CatFact } from 'src/app/shared/models/cat-fact';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css'],
})
export class FeatureDetailsComponent implements OnInit {
  catFact$: Observable<CatFact> = combineLatest([
    this.activatedRoute.params,
    this.activatedRoute.queryParams,
  ]).pipe(
    switchMap(([params, queryParams]) => {
      return of({ fact: params.id, length: queryParams.length } as CatFact);
    })
  );

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
