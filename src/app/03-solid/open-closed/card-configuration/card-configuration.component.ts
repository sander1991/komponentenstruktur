import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardConfiguration } from '../../models/CardConfiguration';
import { ComponentEvent } from './../../../shared/models/component-event';

@Component({
  selector: 'app-card-configuration',
  templateUrl: './card-configuration.component.html',
  styleUrls: ['./card-configuration.component.css'],
})
export class CardConfigurationComponent {
  @Input() cardConfiguration!: CardConfiguration;
  @Output() event = new EventEmitter<ComponentEvent>();
}
