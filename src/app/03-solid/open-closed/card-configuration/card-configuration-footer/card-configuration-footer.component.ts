import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardConfigurationFooter } from 'src/app/03-solid/models/CardConfiguration';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-card-configuration-footer',
  templateUrl: './card-configuration-footer.component.html',
  styleUrls: ['./card-configuration-footer.component.css'],
})
export class CardConfigurationFooterComponent {
  @Input() cardConfigurationFooter!: CardConfigurationFooter;
  @Output() event = new EventEmitter<ComponentEvent>();
}
