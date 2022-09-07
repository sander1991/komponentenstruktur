import { Component, Input } from '@angular/core';
import { CardConfigurationBody } from 'src/app/03-solid/models/CardConfiguration';

@Component({
  selector: 'app-card-configuration-body',
  templateUrl: './card-configuration-body.component.html',
  styleUrls: ['./card-configuration-body.component.css'],
})
export class CardConfigurationBodyComponent {
  @Input() cardConfigurationBody!: CardConfigurationBody;
}
