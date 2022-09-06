import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-c-p-title',
  templateUrl: './card-c-p-title.component.html',
  styleUrls: ['./card-c-p-title.component.css'],
})
export class CardCPTitleComponent {
  @Input() label = null;
}
