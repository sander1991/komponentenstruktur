import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content-projection-1',
  templateUrl: './card-content-projection-1.component.html',
  styleUrls: ['./card-content-projection-1.component.css'],
})
export class CardContentProjection1Component {
  @Input() title: string | null = null;
}
