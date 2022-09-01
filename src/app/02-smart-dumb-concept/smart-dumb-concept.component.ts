import { Component, Input, OnInit } from '@angular/core';
import { CatFact } from '../shared/models/cat-fact';

@Component({
  selector: 'app-smart-dumb-concept',
  templateUrl: './smart-dumb-concept.component.html',
  styleUrls: ['./smart-dumb-concept.component.css']
})
export class SmartDumbConceptComponent {
  @Input() catFacts: CatFact[] = [];

  constructor() { }

  public removeFact(index: number){
    this.catFacts.splice(index, 1);
  }
}