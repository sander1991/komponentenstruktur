import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, switchMap } from 'rxjs';
import { CatFact } from 'src/app/shared/models/cat-fact';

@Component({
  selector: 'app-feature-details-standalone',
  templateUrl: './feature-details-standalone.component.html',
  styleUrls: ['./feature-details-standalone.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
})
export class FeatureDetailsStandaloneComponent {
  catFact$: Observable<CatFact> = combineLatest([
    this.activatedRoute.params,
    this.activatedRoute.queryParams,
  ]).pipe(
    switchMap(([params, queryParams]) => {
      return of({ fact: params.id, length: queryParams.length } as CatFact);
    })
  );

  constructor(private activatedRoute: ActivatedRoute) {}
}
