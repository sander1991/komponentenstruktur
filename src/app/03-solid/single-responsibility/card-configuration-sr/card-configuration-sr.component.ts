import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentEvent } from 'src/app/shared/models/component-event';
import { CardConfiguration } from '../../models/CardConfiguration';

@Component({
  selector: 'app-card-configuration-sr',
  templateUrl: './card-configuration-sr.component.html',
  styleUrls: ['./card-configuration-sr.component.css'],
})
export class CardConfigurationSrComponent {
  @Input() cardConfiguration!: CardConfiguration;
  @Output() event = new EventEmitter<ComponentEvent>();
}
