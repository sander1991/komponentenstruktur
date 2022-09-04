import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentEvent } from './../../../shared/models/component-event';
import { CardConfiguration } from './../models/CardConfiguration';

@Component({
  selector: 'app-card-configuration',
  templateUrl: './card-configuration.component.html',
  styleUrls: ['./card-configuration.component.css'],
})
export class CardConfigurationComponent {
  @Input() cardConfiguration!: CardConfiguration;
  @Output() event = new EventEmitter<ComponentEvent>();
}
