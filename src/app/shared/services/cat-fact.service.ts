import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from '../models/cat-fact';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  private url = 'https://catfact.ninja/fact';

  constructor(private httpClient: HttpClient) {}

  public getFact(length: string): Observable<CatFact> {
    return this.httpClient.get<CatFact>(this.url + '/?max_length=' + length);
  }
}
